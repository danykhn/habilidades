import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        pathMatch:'full',
        loadComponent: ()=> import('./pages/home/home.component')
    },
    {
        path:'profile/:id',
        loadComponent: ()=> import('./pages/profile/profile.component')
    },
];
