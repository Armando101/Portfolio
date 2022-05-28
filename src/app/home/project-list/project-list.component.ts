import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../core/services/user-data.service';
import { IProject } from '../../core/interfaces/user-info.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projectList: Observable<IProject[]>;

  constructor(private readonly userData: UserDataService) {}

  ngOnInit(): void {
    this.projectList = this.userData.getProjectList();
  }
}
