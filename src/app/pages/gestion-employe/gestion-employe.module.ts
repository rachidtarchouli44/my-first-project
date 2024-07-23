import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEmployeRoutingModule } from './gestion-employe-routing.module';
import { GestionEmployeComponent } from './gestion-employe.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionEmployeComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    GestionEmployeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GestionEmployeModule { }
