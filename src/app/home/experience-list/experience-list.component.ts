import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../core/services/user-data.service';
import { Observable } from 'rxjs';
import { IExperience } from '../../core/interfaces/user-info.interface';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss'],
})
export class ExperienceListComponent implements OnInit {
  experienceList: Observable<IExperience[]>;
  description: Observable<string>;

  constructor(private readonly userData: UserDataService) {}

  ngOnInit() {
    this.experienceList = this.userData.getExperienceList();
    this.description = this.userData.getExperienceDescription();
  }
}
