import { Component } from '@angular/core';

// all .component.ts files will be compiled down to normal javascript that the browser can understand
// all .component.ts files are the controller logic for the .component.html files. 
// All Javascript related stuff goes here

@Component({ // Component declarator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Controller logic and methods all go here
export class AppComponent {
  myName = 'Crispian'; 
}
