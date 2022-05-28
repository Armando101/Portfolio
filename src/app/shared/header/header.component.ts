import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserDataService } from '../../core/services/user-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: Observable<string>;
  showNav = false;
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      return;
    }
    this.showNav = false;
  }

  constructor(
    private eRef: ElementRef,
    private readonly userData: UserDataService
  ) {}

  ngOnInit() {
    this.name = this.userData.getUserInfo().pipe(map((item) => item.fullName));
  }

  showNavbar() {
    this.showNav = !this.showNav;
  }

  get classMenu() {
    return this.showNav ? '.icon-visible' : 'is-not-visible';
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
