import { Component, inject,  } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImportsModule } from '../../../shared/imports';
import { AuthApiService } from '../../../../../projects/auth-api/src/public-api';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule,ImportsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',

})
export class RegisterComponent {
 private readonly _AuthApiService = inject(AuthApiService)
 private readonly _Router = inject(Router)

msgerror:string='';



RegisterForm:FormGroup = new FormGroup(

  { 
    username: new FormControl ( null ,[Validators.required, Validators.maxLength(10), Validators.minLength(4)] ),
   firstName : new FormControl ( null , [Validators.required, Validators.maxLength(10), Validators.minLength(4)] ),
   lastName : new FormControl ( null , [Validators.required, Validators.maxLength(10), Validators.minLength(4)] ),
   email : new FormControl ( null , [Validators.required, Validators.email]),
   password : new FormControl (  null , [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
   rePassword : new FormControl ( null ),
   phone: new FormControl ( null ,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)] )

  } ,
 this.confirmpassword

);


Registersubmit(){

  if(this.RegisterForm.valid){
    this._AuthApiService.register(this.RegisterForm.value).subscribe({
      next: (res)=>
        {console.log(res)
          if(res.message=='success'){
            this._Router.navigate(['/login'])

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


confirmpassword(pass:AbstractControl){
  if(pass.get('password')?.value === pass.get('rePassword')?.value){
    return null
  }
  else{
    return { mismatch:true }
  }
}

}

