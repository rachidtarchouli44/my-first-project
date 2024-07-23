import { Component } from '@angular/core';
import { DepatmentService } from '../../services/depatment.service';

@Component({
  selector: 'app-gestion-departement',
  templateUrl: './gestion-departement.component.html',
  styleUrl: './gestion-departement.component.css'
})
export class GestionDepartementComponent {
  departments: any[] = []
  constructor( private depService :DepatmentService) {}
  ngOnInit(): void {
    this.loadListDepartments();
    console.log(this.departments);
  }

  loadListDepartments() : void {
    this.depService.getListDepartment().subscribe(data=>{
      this.departments = data;
    } ,err=> console.log(err));

  }
}
