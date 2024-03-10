import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor() { }

  public list(): Course[] { 
    return [
      {
        _id: '1', name: 'Angular', category: 'Front-end'
      }
    ];
  }
}
