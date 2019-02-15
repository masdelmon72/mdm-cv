import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { PersonalComponent }   from './personal.component';
import { ExperiencesComponent }  from './experiences.component';

import { AppRouteModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRouteModule
  ],
  declarations: [
    AppComponent,
    PersonalComponent,
    ExperiencesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
