import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent  } from './home/home.component';
import { DoctorloginComponent } from './doctor/doctorlogin/doctorlogin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { DoctorregistrationComponent } from './doctor/doctorregistration/doctorregistration.component';
import { DoctordashboardComponent } from './doctor/doctordashboard/doctordashboard.component';
import { PatientregistrationComponent } from './patient/patientregistration/patientregistration.component';
import { PatientloginComponent } from './patient/patientlogin/patientlogin.component';
import { PatientdashboardComponent } from './patient/patientdashboard/patientdashboard.component';
import { PatientformComponent } from './patient/patientform/patientform.component';
import { PatientviewComponent } from './patient/patientview/patientview.component';


const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forRoot([
         { path: '', component: HomeComponent },
         { path: 'AdminloginComponent', component: AdminloginComponent },
         { path: 'doctorlogin', component: DoctorloginComponent },
         { path: 'doctorregistration', component: DoctorregistrationComponent },
         { path: 'doctordashboard', component: DoctordashboardComponent },
         { path: 'patientregistration', component: PatientregistrationComponent },
         { path: 'patientlogin', component: PatientloginComponent },
         { path: 'patientdashboard', component: PatientdashboardComponent },
         { path: 'patientform', component: PatientformComponent },
         { path: 'patientview', component: PatientviewComponent }
         ]),
       ],
  exports: [RouterModule]
})
export class AppRoutingModule { }