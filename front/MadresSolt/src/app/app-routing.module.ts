import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import {HomeComponent } from 'src/app/paginas/home/home.component';
import {MenoresComponent} from 'src/app/paginas/menores/menores.component';
import {MujeresComponent} from 'src/app/paginas/mujeres/mujeres.component';

const routes: Routes = [ 
  {path: 'home', component: HomeComponent,},
  {path: 'menores',component:MenoresComponent,},
  {path: 'mujeres', component:MujeresComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
