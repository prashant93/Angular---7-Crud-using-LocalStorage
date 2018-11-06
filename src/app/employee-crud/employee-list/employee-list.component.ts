import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  emps;
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.emps = this.empService.getEmployees();
  }

  deleteEmployee(id) {
    for(let i = 0; i < this.emps.length; i++) {
      if(this.emps[i].id == id) {
          this.emps.splice(i, 1);
      }
    }

    this.empService.deleteEmployee(id);
  }

}
