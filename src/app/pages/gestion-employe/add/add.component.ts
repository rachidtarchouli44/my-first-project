import { Component, OnInit } from '@angular/core';
import { DepatmentService } from '../../../services/depatment.service';
import { error } from 'console';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  formEmployee!:FormGroup;
  submitted:boolean=false;


  listDepartments:any[]=[] ;
  constructor( private employeeService : EmployeesService ,  
      private fb: FormBuilder, 
        private departmentService:DepatmentService
        ){

        }

  ngOnInit(): void {
    this.getDepartment();
    this.formEmployee= this.fb.group({    
      employeeFirstName: ['' ,Validators.required] ,
      employeeLastName:['' , Validators.required],
      employeePhoneNumber : ['',Validators.required],
      departmentId:['',Validators.required]
    })
  }

  getDepartment():void {
    this.departmentService.getListDepartment().subscribe(data=> {
      console.log(data);
      this.listDepartments.push(...data);
    },error=>{
      console.log(error);
    })
  }
  

  get f(){
    return this.formEmployee.controls;
  }

  submit():void {
    console.log(this.formEmployee.value)
    this.submitted= true;
    if(this.formEmployee.invalid) {
      return;
    } else{
      this.employeeService.postEmployees(this.formEmployee.value).subscribe(data=>{
        console.log("ok");
        console.log(data);
        
        this.formEmployee.reset();

      },err=> {
        console.log(err)
      });
    }
  }

}
