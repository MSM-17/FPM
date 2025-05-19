import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './components/Dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => LoginComponent
    },
    {
        path:'Dashboard',
        loadComponent: () => DashboardComponent
    }
];
