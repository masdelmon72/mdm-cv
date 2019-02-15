
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { Apppersonal } from './personal.component' 
import { AppExperiences } from  './experiences.component'

import { PageNotFoundComponent } from  './NotFound.component' 
import { RouterModule, Routes } from '@angular/router';  

const appRoutes: Routes = [ 
   { path: 'Personal', component: Apppersonal }, 
   { path: 'Experiences', component: AppExperiences }, 
   { path: '**', component: PageNotFoundComponent } 
];  

 
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppModule {
} 
