import { Component } from '@angular/core';
import { CONTACT, USER } from 'src/app/core/constants/user-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  user = USER;
  socialNetworks = CONTACT.socialNetworks;
}
