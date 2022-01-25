import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/core/interfaces/user-info.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: IProject;
  pathImage: string;
  placeholder: string;

  ngOnInit() {
    this.pathImage = `assets/images/projects/${this.project.title.toLocaleLowerCase()}.png`;
    this.placeholder = `Projecto ${this.project.title}`;
  }
}
