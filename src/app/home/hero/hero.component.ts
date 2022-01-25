import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  name = 'Armando Rivera';
  imagePath = '/assets/images/armando-rivera.png';
  placeholder = `Foto de ${this.name}`;
  resume = 'Soy un Frontend, centrado en la creación de productos digitales.';
  description =
    'Me encanta centrarme en los detalles de las experiencias de nuevos productos con una  implementación en código perfecta. Pero los grandes productos no comienzan ahí, comienzan con una sólida colaboración con los compañeros de equipo de investigación, ingeniería y productos para comprender los problemas y las circunstancias de los clientes.';
}
