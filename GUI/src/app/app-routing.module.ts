import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddComponent} from './add/add.component';
import {SuccessComponent} from './success/success.component';
import{SearchComponent} from './search/search.component';
import{StatusComponent} from './status/status.component';



const routes: Routes = [
  {path:'add',component:AddComponent},
  {path:'success',component:SuccessComponent},
  {path:'',component:SearchComponent},
  {path:'status',component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
