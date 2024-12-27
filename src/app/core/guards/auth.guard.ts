import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

let _Router = inject(Router)


if(typeof window !== "undefined" && typeof localStorage !== "undefined"){
  if(localStorage.getItem('usertoken') !== null){
    return true;
  
  }
  else{
    _Router.navigate(['/login'])
    return false ; 
  }
}
else{
  return false ;
}

};
