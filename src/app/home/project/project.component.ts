import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  title = 'Netnet';
  pathImage = `assets/images/projects/${this.title.toLocaleLowerCase()}.png`;
  description =
    'Netnet es una de las plataformas de entretenimiento con más ranking a nivel mundial y detrás de las películas y series que nos ofrece, hay un diseño con el que está estructurada...';
  placeholder = `Projecto ${this.title}`;
}
