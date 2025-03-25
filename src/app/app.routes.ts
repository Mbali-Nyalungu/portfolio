import { Routes } from '@angular/router';

import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';



export const routes: Routes = [ 
    {path:'', component: HomeComponent},
{ path: 'projects', component: ProjectsComponent },
{path: 'about', component: AboutComponent},

];

