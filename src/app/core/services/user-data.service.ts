import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';
import { IContact } from '../interfaces/user-info.interface';
import {
  IExperience,
  IUser,
  IProject,
} from '../interfaces/user-info.interface';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private readonly http: HttpApiService) {}

  getExperienceList() {
    return this.http.request<IExperience[]>('experience');
  }

  getExperienceDescription() {
    return this.http.request<string>('experienceDescription');
  }

  getUserInfo() {
    return this.http.request<IUser>('user');
  }

  getProjectList() {
    return this.http.request<IProject[]>('projectList');
  }

  getContact() {
    return this.http.request<IContact>('contact');
  }
}
