import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NAVIGATION } from 'src/app/core/constants/user-info';
import { INavigation } from 'src/app/core/interfaces/user-info.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbarItems = NAVIGATION;

  constructor(private readonly router: Router) {}

  navigateToSection(section: INavigation) {
    const path = section.path;
    if (section.isExternal) {
      this.isExternal(path);
      return;
    }
    if (path.startsWith('#')) {
      this.isSamePage(path);
      return;
    }

    this.router.navigateByUrl(path);
  }

  isExternal(path: string) {
    window.open(path, '_blank');
  }

  isSamePage(path: string) {
    window.location.hash = '';
    window.location.hash = path;
  }
}
