import { Injectable } from '@angular/core';
import { Patient }from '../patientmodel/patient';
import {clone} from 'lodash';
import {PATIENTS_PERSONS} from '../patientmodel/patient-data';
import { findIndex } from 'lodash';

@Injectable()
export class PatientService {

  private ppersons=PATIENTS_PERSONS;

  getPatientsFromData():Patient[]{
    console.log(this.ppersons);
    return this.ppersons;
  }
  addPatient(patient:Patient){
    this.ppersons.push(patient);
    console.log(this.ppersons);

  }

  updatePatient(patient:Patient){
    let index=findIndex(this.ppersons,(u:Patient)=>{
      return u.name=== patient.name;
    })
    this.ppersons[index]=patient;
  }
   deletePatient(patient:Patient){
    this.ppersons.splice(this.ppersons.indexOf(patient),1);
    console.log(this.ppersons);
  }
  constructor() { }

}
