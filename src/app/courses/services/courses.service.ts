import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _httpCliente = inject(HttpClient)
  private readonly api = 'api/courses';

  public list() {
    return this._httpCliente.get<Course[]>(this.api)
  }
}
