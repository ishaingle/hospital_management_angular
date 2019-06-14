import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorloginComponent } from './doctor/doctorlogin/doctorlogin.component';
import { DoctordashboardComponent } from './doctor/doctordashboard/doctordashboard.component';
import { DoctorregistrationComponent } from './doctor/doctorregistration/doctorregistration.component';
import { PatientloginComponent } from './patient/patientlogin/patientlogin.component';
import { PatientregistrationComponent } from './patient/patientregistration/patientregistration.component';
import { PatientdashboardComponent } from './patient/patientdashboard/patientdashboard.component';
import { PatientformComponent } from './patient/patientform/patientform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorloginComponent,
    DoctordashboardComponent,
    DoctorregistrationComponent,
    PatientloginComponent,
    PatientregistrationComponent,
    PatientdashboardComponent,
    PatientformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
