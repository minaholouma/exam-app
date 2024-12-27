import { Component, inject } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImportsModule } from '../../../shared/imports';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthApiService } from '../../../../../projects/auth-api/src/public-api';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,ImportsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  

private readonly _AuthApiService = inject(AuthApiService)
 private readonly _Router = inject(Router)

msgerror:string='';



LoginForm:FormGroup = new FormGroup(

  { 
   email : new FormControl ( null , [Validators.required, Validators.email]),
   password : new FormControl (  null , [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),

  } 
);



Loginsubmit(){

  if(this.LoginForm.valid){
    this._AuthApiService.login(this.LoginForm.value).subscribe({
      next: (res)=>
        {console.log(res)
          if(res.message=='success'){
            localStorage.setItem ('usertoken',res.token);
            this._AuthApiService.saveUserdata();
            this._Router.navigate(['/home'])

          }
        }, 
      error:(err:HttpErrorResponse)=>
        {
          this.msgerror=err.error.message
          console.log(err)
        }
    })
  }
}


}



