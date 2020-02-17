import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showMenu = false;
  darkModeActive = false;
  constructor() { }

  ngOnInit(): void {
  }

  onToggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onToggleTheme() {
    this.darkModeActive = !this.darkModeActive;
  }

}
