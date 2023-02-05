import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.page.html',
  styleUrls: ['./create-employees.page.scss'],
})
export class CreateEmployeesPage implements OnInit {

  createForm : FormGroup;

  emp = {
    name : "",
    dob : "",
    nrc : "",
    department_name : "",
    position : "",
    salary : "",
  }

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    //  this.createForm  = new FormGroup({
    //   name : new FormControl(null,Validators.required),
    //   dob : new FormControl(null,Validators.required),
    //   nrc : new FormControl(null,Validators.required),
    //   department_name : new FormControl(null,Validators.required),
    //   position : new FormControl(null,Validators.required),
    //   salary : new FormControl(null,Validators.required),
    // });
  }

}
