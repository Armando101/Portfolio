import {
  IContact,
  IExperience,
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
  cvLink:
    'https://drive.google.com/file/d/1URmH2yep9rPqrnrP42foxUF6nWhIeL0s/view?usp=sharing',
};

USER.fullName = `${USER.name} ${USER.lastname}`;

export const NAVIGATION: INavigation[] = [
  { name: 'Proyectos', path: '#projects' },
  { name: 'Experiencia', path: '#experience' },
  { name: 'Contacto', path: '#contact' },
  {
    name: 'Blog',
    path: 'https://armandorivera-blog.netlify.app/',
    isExternal: true,
  },
];

export const PROJECT_LIST: Partial<IProject>[] = [
  {
    title: 'Nemium',
    description:
      'Sitio web clone de Medium, para publicar tu propio blog, versión desktop y móvil, dispone de 4 variantes del mismo proyecto variando en la paleta de colores, se creó únicamente con HTML y CSS',
    linkProject: 'https://armando101.github.io/nemium/',
    linkCode: 'https://github.com/Armando101/nemium',
  },
  {
    title: 'Blockbuster',
    description:
      'Aplicación web para buscar y ver la puntuación de tus películas favoritas, esta aplicación fue construida con JavaScript Vanilla, CSS y HTML',
    linkProject: 'https://armando101.github.io/block-buster/',
    linkCode: 'https://github.com/Armando101/block-buster',
  },
  {
    title: 'Weather app',
    description:
      'Aplicación web para orientada prinipalmente para dispositivos móviles, ve el clima de la semana según tu localidad con esta aplicación. El stack utilizado fue JavaScript Vanilla, CSS y HTML',
    linkProject: 'https://weather-app-beta-vert.vercel.app/',
    linkCode: 'https://github.com/Armando101/weather-app',
  },
  {
    title: 'Spotifu',
    description:
      'Spotifu es un clon de la aplicación desktop Spotify, se construyó unicamente con HTML y CSS, se usó flexbox para el posicionamiento de los elementos',
    linkProject: 'https://armando101.github.io/spotifu/',
    linkCode: 'https://github.com/Armando101/spotifu',
  },
  {
    title: 'Movies world',
    description:
      'Obtén información de las películas del momento, puedes buscar cualquier película, ver información sobre ella como el cast o crew y su puntuación, esta aplicación fue construida con Angular usando nx como entorno de trabajo para aprovechar la arquitectura de monorepo',
    linkCode: 'https://github.com/Armando101/movies-world',
    linkProject: 'https://wonderful-curie-059a30.netlify.app/',
  },
];

export const EXPERIENCE_DESCRIPTION =
  'Tengo más de 2 años de experiencia en Frontend especializando con aplicaciones hechas con Angular.';

export const EXPERIENCE_LIST: IExperience[] = [
  {
    title: 'Kavak',
    periodRole: 'Web Desinger - 10/2021 - Actualidad ',
    description:
      'Desarrollo de aplicaciones con Angular, Maquetado pixel perfect basado en diseños de figma, Integración con GraphQL, proponer y bajar requerimentos a código',
    link: 'https://www.kavak.com/',
  },
  {
    title: 'Palo-IT',
    periodRole: 'Frontend - 04/2021 - 08/2021',
    description:
      'Maquetado con Bootstrap, Integración de API REST, pruebas unitarias con Jasmine y Karma, escribir documentación de proyectos, interacción con clientes',
    link: 'https://www.palo-it.com/es/',
  },
  {
    title: 'Te creemos',
    periodRole: 'Frontend - 09/2020 - 04/2021',
    description:
      'Desarrollo de aplicaciones para entidades financieras, creación de PWA, estilos con Angular Material, técnicas de optimización, buenas prácticas y estructura de proyectos',
    link: 'https://tecreemos.com/',
  },
  {
    title: 'PROTECO',
    periodRole: 'Profesor - 2018-2021',
    description:
      'Impartí cursos de JavaScript, Angular y desarrollo web en general, asesoría y workshops gratuitos a la comunidad, guíar y asesorar a las nuevas generaciones del programa',
    link: 'http://protecounam.mx/',
  },
];

export const CONTACT: IContact = {
  message: '¿Quieres trabajar conmigo? ¡Hazme ping!',
  email: 'rivera.armando0829@gmail.com',
  socialNetworks: [
    {
      name: 'Instagram',
      path: 'https://www.instagram.com/armandorn101/',
    },
    {
      name: 'Twitter',
      path: 'https://twitter.com/armandorn101',
    },
    {
      name: 'GitHub',
      path: 'https://github.com/Armando101',
    },
    {
      name: 'LinkedIn',
      path: 'https://www.linkedin.com/in/armando101/',
    },
  ],
};
