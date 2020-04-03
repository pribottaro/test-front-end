import { Component } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {

  isClicked = true;

  clickActive() {
    return this.isClicked = !this.isClicked;
  }
}
