import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ueber-mich', component: AboutMeComponent },
  { path: 'projekte', component: ProjectsComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
