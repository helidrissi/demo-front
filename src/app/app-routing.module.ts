import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [


  { path: '', redirectTo: "/home", pathMatch: "full"},
 { path: 'home',component:HomeComponent},
 {path:'person',component:PersonComponent}


 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
