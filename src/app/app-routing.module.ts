import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TituloComponent } from './layouts/titulo/titulo.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent ,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
