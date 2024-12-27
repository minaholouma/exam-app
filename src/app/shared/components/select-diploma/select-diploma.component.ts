import { Component, HostListener, inject, OnInit } from '@angular/core';
import { IExamlist } from '../../../core/interfaces/Iexamlist';
import { ExamService } from '../../../core/services/exam.service';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-select-diploma',
  standalone: true,
  imports: [SidebarComponent, ModalComponent],
  templateUrl: './select-diploma.component.html',
  styleUrl: './select-diploma.component.scss'
})
export class SelectDiplomaComponent implements OnInit {

private readonly _ExamService =inject(ExamService)

ExamList:IExamlist[]=[]


  ngOnInit(): void {

    const token = localStorage.getItem('usertoken')!;
    this._ExamService.getallExams(token).subscribe({
      next: (res) => {
        this.ExamList= res.exams
      },
      error: (err) => console.error('Error fetching exams:', err)
    });




    

}



isModalVisible: boolean = false;

showModal() {
  this.isModalVisible = true;
}





}