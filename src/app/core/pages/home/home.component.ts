import { HttpClient } from '@angular/common/http';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { ExamService } from '../../services/exam.service';
import { IExamlist } from '../../interfaces/Iexamlist';
import { ImportsModule } from '../../../shared/imports';
import { CardModule } from 'primeng/card';
import { AutoCompleteCompleteEvent,AutoComplete } from 'primeng/autocomplete';
import { Isublist } from '../../interfaces/Isublist';
import { SidebarComponent } from "../../../shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImportsModule, CardModule, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

private readonly _ExamService =inject(ExamService)

SubList:Isublist[]=[]


  ngOnInit(): void {
    const token = localStorage.getItem('usertoken')!;
    this._ExamService.getAllSubjects(token).subscribe({
      next: (res) => {console.log(res.subjects),
        this.SubList= res.subjects
      },
      error: (err) => console.error('Error fetching exams:', err)
    });

  }
  

      
  }



