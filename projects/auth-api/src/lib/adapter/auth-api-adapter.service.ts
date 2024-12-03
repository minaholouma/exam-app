import { Injectable } from '@angular/core';
import { Adaper } from '../interfaces/adaper';

@Injectable({
  providedIn: 'root'
})
export class AuthApiAdapterService  implements Adaper{

  constructor() { }

  adapt (data:any){
    return {
      message:data.message , 
      token : data.token , 
      userEmail : data.user.email  
    }

    }


}
