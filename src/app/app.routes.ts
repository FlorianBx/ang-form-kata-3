import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'reactive-form', loadComponent: () => import('./components/reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent) },
];
