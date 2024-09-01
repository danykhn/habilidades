import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'/',
        loadComponent: ()=> import('./pages/home/home.component')
    },
    {
        path:'profile/:id',
        loadComponent: ()=> import('./pages/profile/profile.component')
    },
];
