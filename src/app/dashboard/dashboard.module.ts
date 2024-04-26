import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgbHighlight, NgbDatepickerModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRecordsComponent } from './student-records/student-records.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    children: [
      {
        path:"",
        redirectTo: "/dashboard/landing",
        pathMatch: "full"
      },
      {
        path: "landing",
        component: LandingComponent
      },
      {
        path: "students",
        component: StudentRecordsComponent
      }
    ]
   },
]

@NgModule({
  declarations: [
    LandingComponent,
    SideBarComponent,
    DashboardComponent,
    StudentRecordsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDatepickerModule,
    AgGridModule,
    NgbTypeaheadModule,
    NgbHighlight,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
