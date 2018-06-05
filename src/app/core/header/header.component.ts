import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() togger = new EventEmitter<void>();
  @Output() toggerDarkTheme = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit() {
  }

  // sidenavbar open and close event emit
  openSideBar() {
    this.togger.emit();
  }

  // switch theme
  onChange(checked: Boolean) {
    // console.log(checked);
    this.toggerDarkTheme.emit(checked);
  }

}
