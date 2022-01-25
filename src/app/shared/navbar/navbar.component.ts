import { Component } from '@angular/core';
import { NAVIGATION } from 'src/app/core/constants/user-info';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbarItems = NAVIGATION;
}
