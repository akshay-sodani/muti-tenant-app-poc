import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";

export const routes: Routes = [
  { path: ':tenant', component: AppComponent },
  { path: '', redirectTo: '/tenant1', pathMatch: 'full' }
];
