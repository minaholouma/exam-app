import { Component,  inject,  } from '@angular/core';
import { AuthApiService } from '../../../../../projects/auth-api/src/public-api';
import { ImageModule } from 'primeng/image';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ ImageModule ,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  model:any []=[];

  private readonly _AuthApiService=inject(AuthApiService)
  private readonly _Router=inject(Router)
  constructor(){}
    



   }





