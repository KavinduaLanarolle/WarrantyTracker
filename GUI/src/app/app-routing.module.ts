import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddComponent} from './add/add.component';
import {SuccessComponent} from './success/success.component';
import{SearchComponent} from './search/search.component';
import{StatusComponent} from './status/status.component';
import{LoginComponent} from './login/login.component';
import{UserComponent} from './user/user.component';



const routes: Routes = [
  {path:'add',component:AddComponent},
  {path:'success',component:SuccessComponent},
  {path:'',component:SearchComponent},
  {path:'status',component:StatusComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
