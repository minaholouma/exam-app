import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndpoint } from './enums/AuthAPI.Endpoint';
import { AuthApiAdapterService } from './adapter/auth-api-adapter.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService  implements AuthAPI{

  constructor( private  _httpClient:HttpClient , private _authApiAdapterService:AuthApiAdapterService) { }


userdata:any = null ;

   login(data: any): Observable<any> {
    return (this._httpClient.post(AuthEndpoint.signin,data) )
  }


  register(data: any): Observable<any> {
    return (this._httpClient.post(AuthEndpoint.signup,data) )
  }



  saveUserdata( )
{

  if(localStorage.getItem ('usertoken')!== null){
   this.userdata= jwtDecode(localStorage.getItem ('usertoken')!)
  }
  }


  setVerifyEmail(data:any):Observable<any>{
    return (this._httpClient.post(AuthEndpoint.forgotPassword,data) )
  }


  setcodeverify(data:any):Observable<any>{
    return (this._httpClient.post(AuthEndpoint.verifyResetCode,data) )
  }

  setresetpassword(data:any):Observable<any>{
    return (this._httpClient.put(AuthEndpoint.resetPassword,data) )
  }
}
