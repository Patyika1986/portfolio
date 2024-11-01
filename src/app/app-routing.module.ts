import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './pages/cv/cv/cv.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';

const routes: Routes = [
  {
    path: 'inwork',
    loadChildren: () => import('./pages/inwork/inwork.module').then(m => m.InworkModule)
  },
  {
    path: 'cv',
    loadChildren: () => import('./pages/cv/cv.module').then(m => m.CvModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
