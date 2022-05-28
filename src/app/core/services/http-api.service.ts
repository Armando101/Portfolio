import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USER, CONTACT } from '../constants/user-info';
import {
  EXPERIENCE_LIST,
  EXPERIENCE_DESCRIPTION,
  PROJECT_LIST,
} from '../constants/user-info';

const DATA = {
  experience: EXPERIENCE_LIST,
  experienceDescription: EXPERIENCE_DESCRIPTION,
  user: USER,
  projectList: PROJECT_LIST,
  contact: CONTACT,
};

@Injectable({
  providedIn: 'root',
})
export class HttpApiService {
  constructor() {}

  request<T>(type: string): Observable<T> {
    return of<T>(DATA[type]);
  }
}
