import { Component } from '@angular/core';
import { CONTACT } from 'src/app/core/constants/user-info';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contact = CONTACT;
}
