import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { TableComponent } from './core/table/table.component';
import { Work1Component } from './core/classes/work1/work1.component';
import { Work3Component } from './core/classes/work3/work3.component';

const routes: Routes = [
  {path:'',redirectTo:'/app/work1',pathMatch:'full'},
  {
    path:'app',component:NavbarComponent,children:[
        {path:'work1',component:Work1Component},
        {path:'work2',component:TableComponent},
        {path:'work3',component:Work3Component},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
