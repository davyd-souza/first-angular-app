import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // Via this method you'll reference to a file
  templateUrl: './app.component.html',
  // Via this method you'll write the template inline
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,

  // You can also have multiple css files, an array is used because we can refence multiple css files.
  styleUrls: ['./app.component.css']
  // Internal example
  // styles: [`
  //   h3 {
  //     color: dodgerblue;
  //   }
  // `]

})
export class AppComponent {
}
