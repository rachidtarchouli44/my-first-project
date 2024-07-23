import { Component, Input, OnInit } from '@angular/core';
import { DepatmentService } from '../../../services/depatment.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  @Input() departments: any;
  constructor( private depService :DepatmentService) {}
  ngOnInit(): void {
    
    console.log(this.departments);
  }

}
