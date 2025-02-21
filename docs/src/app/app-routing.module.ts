import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:"",
    redirectTo: "/home",
    pathMatch:"full", 
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"skills",
    component:SkillsComponent
  },
 {
  path:"about",
  component:AboutComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
