import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StudentRecordsComponent } from './student-records/student-records.component'; 
import { authGuardGuard } from './auth/auth-guard.guard';
import { LoginComponent } from './auth/login/login.component';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'landing',
        component: LandingComponent,
        canMatch: [authGuardGuard]
    },
    {
        path: 'students',
        component: StudentRecordsComponent,
        canMatch: [authGuardGuard]
    }
];
