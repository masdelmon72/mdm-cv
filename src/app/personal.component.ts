import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-pdata',
   templateUrl: './personal.component.html',
   styleUrls: ['./personal.component.css']
})

export class NewCmpComponent implements OnInit {
   newcomponent = "Personal Data component created";
   constructor() {}
   ngOnInit() { }
}
