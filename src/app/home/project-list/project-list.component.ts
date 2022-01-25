import { Component } from '@angular/core';
import { PROJECT_LIST } from 'src/app/core/constants/user-info';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  projectList = PROJECT_LIST;
}
