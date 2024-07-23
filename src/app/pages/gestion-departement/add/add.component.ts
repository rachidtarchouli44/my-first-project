import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms'
import { DepatmentService } from '../../../services/depatment.service';
import { error } from 'console';
import {  } from 'stream';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {


  @Output() addEvent: EventEmitter<any> = new EventEmitter<any>();
  departForm!: FormGroup;
  constructor( private fb:FormBuilder , private deptService: DepatmentService){}
  ngOnInit(): void {
      this.departForm=this.fb.group({
        departmentName:['' , Validators.required]
      })
  }

  get f() {return this.departForm.controls}

  add(){
    this.addEvent.emit();
  }

  submit():void {

    if(this.departForm.invalid) {
      return;
    }else {
      console.log(this.departForm.value)
      this.deptService.postDepartment(this.departForm.value).subscribe(response => {
        this.add()
        console.log("ok")
      },error=> console.log(error)
      )
    }

    }


}
