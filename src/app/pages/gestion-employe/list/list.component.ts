import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../services/employees.service';
import { error } from 'console';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
 
  listEmployees:any =[];
  constructor(private employeeService: EmployeesService){}
 
  ngOnInit(): void {
    this.getEmployees();
  }


  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(data  => {
        console.log(data);
        this.listEmployees.push(...data);

    } ,error=>console.log(error))
  }

}
