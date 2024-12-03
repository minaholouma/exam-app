import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ImportsModule } from '../../../shared/imports';
import { Router } from 'express';
import { AuthApiService } from '../../../../../projects/auth-api/src/public-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-foregetpassword',
  standalone: true,
  imports: [ ReactiveFormsModule,ImportsModule ],
  templateUrl: './foregetpassword.component.html',
  styleUrl: './foregetpassword.component.scss'
})
export class ForegetpasswordComponent {
  private readonly _AuthApiService = inject(AuthApiService)
 private readonly _Router = inject(Router)

 msgerror: any;




  verifyemail:FormGroup = new FormGroup(

    { 
     email : new FormControl ( null , [Validators.required, Validators.email]),  
    } 
  );
  

verifysubmet(){
  this._AuthApiService.setVerifyEmail(this.verifyemail.value).subscribe({
    next: (res)=>
      {console.log(res)
        if(res.message=='success'){
          this._Router.navigate([''])

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
