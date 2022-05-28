import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../core/services/user-data.service';
import { IUser } from '../../core/interfaces/user-info.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  user: IUser;

  constructor(private readonly userService: UserDataService) {}

  ngOnInit() {
    this.userService.getUserInfo().subscribe((data) => (this.user = data));
  }

  get imagePath() {
    return `/assets/images/${this.user.image}.png`;
  }

  get placeholder() {
    return `Foto de ${this.user.fullName}`;
  }
}
