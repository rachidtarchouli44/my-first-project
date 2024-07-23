import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDepartementRoutingModule } from './gestion-departement-routing.module';
import { GestionDepartementComponent } from './gestion-departement.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import  {FormsModule} from '@angular/forms' ;

@NgModule({
  declarations: [
    GestionDepartementComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GestionDepartementRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GestionDepartementModule { }
