import { Component } from '@angular/core';
import {
  EXPERIENCE_DESCRIPTION,
  EXPERIENCE_LIST,
} from 'src/app/core/constants/user-info';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss'],
})
export class ExperienceListComponent {
  experienceList = EXPERIENCE_LIST;
  description = EXPERIENCE_DESCRIPTION;
}
