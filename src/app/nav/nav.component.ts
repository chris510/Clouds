import { Component, OnInit, OnDestroy } from '@angular/core';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  showMenu = false;
  darkModeActive = false;
  themeSub: Subscription;

  constructor(
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    this.themeSub = this.uiService.darkModeState.subscribe(
      (val) => {
        this.darkModeActive = val;
        console.log(val,);
      }
    )
  }

  onToggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onToggleTheme() {
    this.uiService.darkModeState.next(!this.darkModeActive);
    this.uiService.isDarkTheme() ? this.uiService.setLightTheme() : this.uiService.setDarkTheme();
  }

  ngOnDestroy() {
    this.themeSub.unsubscribe();
  }
}
