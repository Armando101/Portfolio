import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  ISocialNetworks,
  IUser,
} from '../../core/interfaces/user-info.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  user: Observable<IUser>;
  socialNetworks: Observable<ISocialNetworks[]>;

  constructor(private readonly userData: UserDataService) {}

  ngOnInit() {
    this.user = this.userData.getUserInfo();
    this.socialNetworks = this.userData
      .getContact()
      .pipe(map((item) => item.socialNetworks));
  }
}
