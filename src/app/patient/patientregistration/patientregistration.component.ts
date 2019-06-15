import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patientservice/patient.service';
import { Patient }from '../patientmodel/patient';
import { clone } from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.css']
})
export class PatientregistrationComponent implements OnInit {
	patients:Patient[];
  	newPatient:any={}; 

  constructor(private patientService:PatientService, private router: Router) { }

  ngOnInit() {
  }

  registerPatient=function(patient:Patient){
   
     this.patientService.addPatient(patient);
      this.router.navigate(['/patientview']);
    }

}
