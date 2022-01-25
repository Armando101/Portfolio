import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  name = 'Armando Rivera';
  showNav = false;
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      return;
    }
    this.showNav = false;
  }

  constructor(private eRef: ElementRef) {}

  showNavbar() {
    this.showNav = !this.showNav;
  }

  get hamburguerIcon() {
    return 'icon-hamburguer-button';
  }

  get closeIcon() {
    return 'icon-close';
  }

  get currentIconClass() {
    const iconClass = this.showNav ? this.closeIcon : this.hamburguerIcon;
    return iconClass;
  }
}
