import { Component, inject, Input } from '@angular/core';
import { ExamService } from '../../../core/services/exam.service';
import { QuizModal } from '../../../core/interfaces/quiz-modal';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
private readonly _ExamService = inject(ExamService);
private fb = inject(FormBuilder);
@Input() isVisible: boolean = false;


quizForm: FormGroup=  this.fb.group({
  answers: this.fb.array([]),  
  time: [0]  
});

// questionForm: FormGroup = this.initQuestionForm();
questions: QuizModal[] =[
  {
    "_id": "670082800a5849a4aee16294",
    answers: [
      { answer: 'Hyperlinks and Text Markup Language', key: 'A1' },
      { answer: 'Hyper Text Markup Language', key: 'A2' },
      { answer: 'Home Tool Markup Language', key: 'A3' }
    ],
    question: 'What does HTML stand for?',
    correct: 'A2',
  },
  {
  "_id": "670082e50a5849a4aee1629a",
    answers: [
      { answer: 'Cascading Style Sheets', key: 'A1' },
      { answer: 'Computer Style Sheets', key: 'A2' },
      { answer: 'Creative Style Sheets', key: 'A3' }
    ],
    question: 'What does CSS stand for?',
    correct: 'A1'
  }];
currentQuestionIndex: number = 0;
selectedAnswer: string = '';
isAnswerCorrect: boolean | null = null;
startTime!: number;
isFinish: boolean=false;
  checkQuestion: any;

constructor() {}

ngOnInit(): void {

    const token = localStorage.getItem('usertoken');
      this._ExamService.getQuestions(token!).subscribe({
        next: (res) => {
          console.log("API Response:", res);
          if (res && res.questions) {
            this.questions = res.questions;
          } else {
            console.error("No questions found in the response.");
          }
        },
        error: (err) => console.error('Error fetching exams:', err),
      });


  this.startTime = Date.now(); // Start the timer
  this.questions.forEach((question) => {
    this.answersArray.push(
        this.fb.group({
          questionId: [question._id],
          correct: [null]
        })
      );
    });
}




get answersArray(): FormArray {
  return this.quizForm.get('answers') as FormArray;
}

onNext(): void {
  const currentAnswer = this.answersArray.at(this.currentQuestionIndex);
console.log(currentAnswer)
console.log(this.answersArray)

  if (currentAnswer.value.correct) {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      const endTime = Date.now();
      const elapsedTime = Math.floor((endTime - this.startTime) / 1000);
      this.quizForm.patchValue({ time: elapsedTime });
      console.log('Final Form Data:', this.quizForm.value);
      alert('Quiz completed!');
    }
  } else {
    alert('Please select an answer before proceeding.');
  }
}

onSubmit(): void {
  const token = localStorage.getItem('usertoken')!;
  const endTime = Date.now();
  const elapsedTime = Math.floor((endTime - this.startTime) / 1000);
  this.quizForm.patchValue({ time: elapsedTime });
  console.log('Submitted Form Data:', this.quizForm.value);
  this._ExamService.checkquestion(this.quizForm.value,token).subscribe((res)=>{
    console.log(res);
    this.checkQuestion = res;
    this.isFinish=true;
  })
  alert('Quiz Submitted!');
}
  closeModal(): void {
    const modalElement = document.getElementById('quizModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.setAttribute('aria-hidden', 'true');
      modalElement.style.display = 'none';
      document.body.classList.remove('modal-open');
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    }
    this.isVisible = false;

  }

  openModal(): void {
    const modalElement = document.getElementById('quizModal');
    if (modalElement) {
      modalElement.classList.add('show');
      modalElement.setAttribute('aria-hidden', 'false');
      modalElement.style.display = 'block';
      document.body.classList.add('modal-open');
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop fade show';
      document.body.appendChild(backdrop);
    }
  }

}



