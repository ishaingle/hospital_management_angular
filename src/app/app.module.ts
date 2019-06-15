import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PatientService } from './patient/patientservice/patient.service';

import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { DoctorloginComponent } from './doctor/doctorlogin/doctorlogin.component';
import { DoctordashboardComponent } from './doctor/doctordashboard/doctordashboard.component';
import { DoctorregistrationComponent } from './doctor/doctorregistration/doctorregistration.component';
import { PatientloginComponent } from './patient/patientlogin/patientlogin.component';
import { PatientregistrationComponent } from './patient/patientregistration/patientregistration.component';
import { PatientdashboardComponent } from './patient/patientdashboard/patientdashboard.component';
import { PatientformComponent } from './patient/patientform/patientform.component';
import { PatientviewComponent } from './patient/patientview/patientview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginComponent,
    DoctorloginComponent,
    DoctordashboardComponent,
    DoctorregistrationComponent,
    PatientloginComponent,
    PatientregistrationComponent,
    PatientdashboardComponent,
    PatientformComponent,
    PatientviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ 

    PatientService 
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
