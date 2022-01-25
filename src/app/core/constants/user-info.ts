import {
  INavigation,
  IProject,
  IUser,
} from '../interfaces/user-info.interface';

export const USER: Partial<IUser> = {
  name: 'Armando',
  lastname: 'Rivera',
  image: 'armando-rivera',
  resume: 'Soy un Frontend, centrado en la creación de productos digitales.',
  description:
    'Me encanta centrarme en los detalles de las experiencias de nuevos productos con una  implementación en código perfecta. Pero los grandes productos no comienzan ahí, comienzan con una sólida colaboración con los compañeros de equipo de investigación, ingeniería y productos para comprender los problemas y las circunstancias de los clientes.',
};

USER.fullName = `${USER.name} ${USER.lastname}`;

export const NAVIGATION: INavigation[] = [
  { name: 'Proyectos', path: '#' },
  { name: 'Testimonios', path: '#' },
  { name: 'Contacto', path: '#' },
  { name: 'Prensa', path: '#' },
];

export const PROJECT_LIST: Partial<IProject>[] = [
  {
    title: 'Netnet',
    description:
      'Netnet es una de las plataformas de entretenimiento con más ranking a nivel mundial y detrás de las películas y series que nos ofrece, hay un diseño con el que está estructurada...',
  },
  {
    title: 'Instantanea',
    description:
      'Aplicación y red social propiedad de Facebook, cuya función principal es poder compartir fotografías y vídeos con otros usuarios.Aplicación y red social propiedad de Facebook, cuya función principal es poder compartir fotografías y vídeos con otros usuarios.',
  },
];
