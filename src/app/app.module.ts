import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { RouterModule}   from '@angular/router';

import { AppComponent }    from './app.component';
import { PersonalComponent } from './personal.component';

@NgModule({
   declarations: [
      AppComponent,
      PersonalComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot([
         {
            path: 'pdata',
            component: PersonalComponent
         }
      ])
   ],
   providers: [],
   bootstrap: [AppComponent]
})

export class AppModule { }
