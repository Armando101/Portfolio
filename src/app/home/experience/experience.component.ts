import { Component, Input } from '@angular/core';
import { IExperience } from 'src/app/core/interfaces/user-info.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() experience: IExperience;
}
