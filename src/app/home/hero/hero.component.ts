import { Component } from '@angular/core';
import { USER } from 'src/app/core/constants/user-info';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  name = USER.fullName;
  imagePath = `/assets/images/${USER.image}.png`;
  placeholder = `Foto de ${this.name}`;
  resume = USER.resume;
  description = USER.description;
}
