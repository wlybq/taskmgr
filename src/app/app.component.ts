import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggleTheme: Boolean = false;

  switchTheme(flag) {
    this.toggleTheme = flag;
  }

}
