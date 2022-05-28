import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../core/services/user-data.service';
import { IContact } from '../../core/interfaces/user-info.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact: IContact;

  constructor(private readonly userData: UserDataService) {}

  ngOnInit() {
    this.userData.getContact().subscribe((data) => {
      this.contact = data;
    });
  }

  get emailLink() {
    return `mailto:${this.contact.email}`;
  }
}
