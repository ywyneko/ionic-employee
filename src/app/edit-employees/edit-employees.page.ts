import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { take, tap } from 'rxjs';
import { Employees } from '../models/employees.model';
import { EmployeesService } from './../services/employees.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.page.html',
  styleUrls: ['./edit-employees.page.scss'],
})
export class EditEmployeesPage implements OnInit {

  // updateForm : FormGroup | any;

  employee : Employees;
  // emp = {
  //   name : "",
  //   dob : "",
  //   nrc : "",
  //   department_name : "",
  //   position : "",
  //   salary : "",
  // }

  id : any;

  constructor(
    private EmployeesService : EmployeesService,
    private loadingCtrl : LoadingController,
    private router : Router,
    private route : ActivatedRoute
    ) {
      
     }

  ngOnInit() {

    

    }

     async getEmp(employeeId : number){

      await this.EmployeesService.getEmployee(employeeId);
      
     }







    //  this.updateForm  = new FormGroup({
    //   name : new FormControl(null,Validators.required),
    //   dob : new FormControl(null,Validators.required),
    //   nrc : new FormControl(null,Validators.required),
    //   department_name : new FormControl(null,Validators.required),
    //   position : new FormControl(null,Validators.required),
    //   salary : new FormControl(null,Validators.required),
    // });

  // async createEmp(){
  //   const loading = await this.loadingCtrl.create({message : "loading"});
  //   loading.present();
  //   this.EmployeesService.createEmployee(this.updateForm.value).pipe(
  //     take(1)
  //   ).subscribe(()=>{
  //     loading.dismiss();
  //     this.route.navigateByUrl('');
  //   })
  // }

}
