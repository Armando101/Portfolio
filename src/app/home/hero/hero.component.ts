import { Component } from '@angular/core';
import { USER } from 'src/app/core/constants/user-info';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  user = USER;

  get imagePath() {
    return `/assets/images/${this.user.image}.png`;
  }

  get placeholder() {
    return `Foto de ${this.user.fullName}`;
  }
}
