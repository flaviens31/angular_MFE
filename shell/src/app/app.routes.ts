import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LaunchComponent } from './launch/launch.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'launch', component: LaunchComponent },
];
