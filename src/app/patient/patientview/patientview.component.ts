import { Component, OnInit } from '@angular/core';
import { Patient }from '../patientmodel/patient';
import { clone } from 'lodash';
import { Router } from '@angular/router';
import { PatientService } from '../patientservice/patient.service';

@Component({
  selector: 'app-patientview',
  templateUrl: './patientview.component.html',
  styleUrls: ['./patientview.component.css']
})
export class PatientviewComponent implements OnInit {

	patients:Patient[];
    newPatient:any={}; 
    editedPatient:any={};
    PatientForm:boolean=false;
    editPatientForm:boolean=false;

  constructor(private patientService:PatientService, private router: Router) { }

  ngOnInit() {
      this.getPatients();
  }

  getPatients=function(){
    this.patients=this.patientService.getPatientsFromData();
  }

  showEditPatientForm(patient:Patient){
  
    this.editedPatient=clone(patient);
  }
    updatePatient(){
    this.patientService.updatePatient(this.editedPatient);
    // this.router.navigate(['/patientview']);
    this.editedPatient={};    
  }

   removeUser(patient:Patient){
    this.patientService.deletePatient(patient);
  }

}
