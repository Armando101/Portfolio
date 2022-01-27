import {
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
    title: 'Portafolio',
    description:
      'Publica tus projectos, tu experiencia y contacto, muéstrale al mundo las tecnologdías con las que has trabajado. Esta aplicación fue construida con Angular, Sass, HTML y CSS, se buscó tener una arquitectura basada en componentes reutilizables',
    linkProject: 'https://www.armandorivera.tech',
    linkCode: 'https://github.com/Armando101/Portfolio',
  },
  {
    title: 'Spotifu',
    description:
      'Spotifu es un clon de la aplicación desktop Spotify, se construyó unicamente con HTML y CSS, se usó flexbox para el posicionamiento de los elementos',
    linkProject: 'https://armando101.github.io/spotifu/',
    linkCode: 'https://github.com/Armando101/spotifu',
  },
  {
    title: 'Nemium',
    description:
      'Sitio web clone de Medium, para publicar tu propio blog, versión desktop y móvil, dispone de 4 variantes del mismo proyecto variando en la paleta de colores, se creó únicamente con HTML y CSS',
    linkProject: 'https://armando101.github.io/nemium/',
    linkCode: 'https://github.com/Armando101/nemium',
  },
  {
    title: 'Blog personal',
    description:
      'En este sitio web puedes publicar tus propios artículos, fue creado con gatsby y para el deploy se ocupó Netlify y cloudflare',
    linkCode: 'https://github.com/Armando101/blog',
    linkProject: 'https://armandorivera-blog.netlify.app/',
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

export const CONTACT = {
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
