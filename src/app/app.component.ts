import { Component } from "@angular/core";

@Component ({
   selector: 'app-root',
   template: `
   <ul>
      <li><a [routerLink] = "['/personal']">Personal</a></li>
      <li><a [routerLink] = "['/Experiences']">Experiences</a></li>
   </ul>
   <router-outlet></router-outlet>`
})
export class AppComponent {
  title = "myCV";
}




