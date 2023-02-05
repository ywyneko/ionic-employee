import { LoadingController } from '@ionic/angular';
import { EmployeesService } from './../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.page.html',
  styleUrls: ['./create-employees.page.scss'],
})
export class CreateEmployeesPage implements OnInit {

  createForm : FormGroup | any;

  emp = {
    name : "",
    dob : "",
    nrc : "",
    department_name : "",
    position : "",
    salary : "",
  }

  constructor(private formbuilder:FormBuilder,
    private EmployeesService : EmployeesService,
    private loadingCtrl : LoadingController
    ) { }

  ngOnInit() {
     this.createForm  = new FormGroup({
      name : new FormControl(null,Validators.required),
      dob : new FormControl(null,Validators.required),
      nrc : new FormControl(null,Validators.required),
      department_name : new FormControl(null,Validators.required),
      position : new FormControl(null,Validators.required),
      salary : new FormControl(null,Validators.required),
    });
  }

  async createEmp(){
    const loading = await this.loadingCtrl.create({message : "loading"});
    loading.present();
    this.EmployeesService.createEmployee(this.createForm.value).pipe(
      take(1)
    ).subscribe((employee)=>{
      console.log(employee)
      loading.dismiss();
    })
  }

}
