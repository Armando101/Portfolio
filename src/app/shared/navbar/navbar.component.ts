import { Component } from '@angular/core';
import { NAVIGATION } from 'src/app/core/constants/user-info';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbarItems = NAVIGATION;

  navigateToSection(section: string) {
    if (section.startsWith('#')) {
      window.location.hash = '';
      window.location.hash = section;
      return;
    }
    window.location.href = section;
  }
}
