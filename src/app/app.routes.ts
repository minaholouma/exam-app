import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {path:'', loadComponent:()=>import ("./core/pages/register/register.component").then(c=>c.RegisterComponent)},
    {path:'register', loadComponent:()=>import ("./core/pages/register/register.component").then(c=>c.RegisterComponent)},
    {path:'login', loadComponent:()=>import ("./core/pages/login/login.component").then(c=>c.LoginComponent)},
    {path:'foregetpassword', loadComponent:()=>import ("./core/pages/foregetpassword/foregetpassword.component").then(c=>c.ForegetpasswordComponent)},
    {path:'home', loadComponent:()=>import ("./core/pages/home/home.component").then(c=>c.HomeComponent), canActivate:[authGuard]},
    {path:'diploma', loadComponent:()=>import ("./shared/components/select-diploma/select-diploma.component").then(c=>c.SelectDiplomaComponent)},
    {path:'modal', loadComponent:()=>import ("./shared/components/modal/modal.component").then(c=>c.ModalComponent)},



    
];
