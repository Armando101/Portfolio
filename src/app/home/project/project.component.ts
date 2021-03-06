import { Component, Input, OnInit } from '@angular/core';
import { EVEN } from 'src/app/core/constants/utils.constants';
import { IProject } from 'src/app/core/interfaces/user-info.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: IProject;
  @Input() private readonly id: number;

  pathImage: string;
  placeholder: string;

  ngOnInit() {
    this.pathImage = `assets/images/projects/${this.image}.png`;
    this.placeholder = `Projecto ${this.project.title}`;
  }

  get image() {
    const kebakCase = this.project.title.replace(' ', '-');
    const imageName = kebakCase.toLocaleLowerCase();
    return imageName;
  }

  get isEven() {
    return this.id % EVEN === 0;
  }
}
