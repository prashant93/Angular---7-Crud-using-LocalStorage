import { Injectable } from '@angular/core';
import { Init } from './employee-init';

@Injectable({
    providedIn: 'root',
  })
export class EmployeeService extends Init {

  constructor() {
    super();
    console.log('EmployeeService Works');
    this.load();
   }

   getEmployees() {
     let emp = JSON.parse(localStorage.getItem('employees'));
     return emp;
   }

   addEmployee(newEmp) {
      let emps = JSON.parse(localStorage.getItem('employees'));
      emps.push(newEmp);
      localStorage.setItem('employees', JSON.stringify(emps));
   }

   deleteEmployee(id) {
     let emps = JSON.parse(localStorage.getItem('employees'));
     for(let i = 0; i <emps.length; i++) {
      if(emps[i].id == id) {
        emps.splice(i, 1);
      }
   }
      localStorage.setItem('employees', JSON.stringify(emps));
   }

     updateEmployee(oldEmp, newEmp){  let emps = JSON.parse(localStorage.getItem('employees'));

     for(let i = 0; i <emps.length; i++) {
      if(emps[i].id == oldEmp.id) {
        emps[i] = newEmp;
      }
   }
      localStorage.setItem('employees', JSON.stringify(emps));
   }




}