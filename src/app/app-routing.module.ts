import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './pages/cv/cv/cv.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { EmployerComponent } from './pages/employer/employer/employer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redirect empty path to home
    pathMatch: 'full' // Ensure the whole URL is matched
  },
  {
    path: 'reference',
    component: EmployerComponent
  },
  {
    path: 'reference/:id',
    component: EmployerComponent
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'inwork',
    loadChildren: () => import('./pages/inwork/inwork.module').then(m => m.InworkModule)
  },
  {
    path: 'cv',
    loadChildren: () => import('./pages/cv/cv.module').then(m => m.CvModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) // Ensure HomeModule is loaded for 'home'
  },
  {
    path: '**',
    redirectTo: 'home' // Redirect any unknown path to home
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
