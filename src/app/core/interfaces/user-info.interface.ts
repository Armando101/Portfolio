export interface IUser {
  name: string;
  lastname: string;
  fullName: string;
  image: string;
  resume: string;
  description: string;
  cvLink: string;
}

export interface INavigation {
  name: string;
  path: string;
  isExternal?: boolean;
}

export interface IProject {
  title: string;
  pathImage: string;
  description: string;
  placeholder: string;
  linkProject: string;
  linkCode: string;
}

export interface IExperience {
  title: string;
  periodRole: string;
  description: string;
  link: string;
}

export interface ISocialNetworks {
  name: string;
  path: string;
}

export interface IContact {
  message: string;
  email: string;
  socialNetworks: ISocialNetworks[];
}
