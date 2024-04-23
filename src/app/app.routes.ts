import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StudentRecordsComponent } from './student-records/student-records.component'; 


export const routes: Routes = [
    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'students',
        component: StudentRecordsComponent
    }
];
