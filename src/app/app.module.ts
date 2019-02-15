import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { PersonalComponent }   from './app.personal.component';
import { ExperiencesComponent }  from './app.experiences.component';

import { AppModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppModule
  ],
  declarations: [
    AppComponent,
    PersonalComponent,
    ExperiencesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
