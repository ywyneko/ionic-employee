import { EmployeeDetailPage } from './../employee-detail/employee-detail.page';
import { Observable, tap } from 'rxjs';
import { EmployeesService } from './../services/employees.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Employees } from '../models/employees.model';
import { EditEmployeesPage } from '../edit-employees/edit-employees.page';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  @Input() employee : Employees;

  employees$ : Observable<Employees[]> | any;

 constructor(
  private EmployeesService : EmployeesService,
  private loadingCtrl: LoadingController,
  ){

 }

  ngOnInit() {
    this.init();
  }

  async init(){
    const loading = await this.loadingCtrl.create({message : "loading"});
    loading.present();

    this.employees$ = this.EmployeesService.getEmployees().pipe(
      tap((employees)=>{
        loading.dismiss();
        return employees;
      })
    );
  }


  // async openEditModal(){
  //   const modal = await this.modalCtrl.create({
  //     component : EditEmployeesPage,
  //     componentProps : {employee : this.employee}
  //   });

  //   await modal.present();
  // }

  // async openDetailModal(employee : Employees){
  //   const modal = await this.modalCtrl.create({
  //     component : EmployeeDetailPage,
  //     componentProps : {employee}     
  //   });
  //   modal.present();
  // } 

}
