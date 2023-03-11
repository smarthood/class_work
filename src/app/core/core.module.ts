import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { Work1Component } from './classes/work1/work1.component';
import { Work3Component } from './classes/work3/work3.component';
import { InputComponent } from './classes/input/input.component';
import { WorkZComponent } from './classes/work-z/work-z.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent,
    Work1Component,
    Work3Component,
    InputComponent,
    WorkZComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    InputComponent
  ]
})
export class CoreModule { }
