import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Course } from '../model/course';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _httpCliente = inject(HttpClient)
  private readonly api = 'api/courses';

  public list() {
    return this._httpCliente.get<Course[]>(this.api)
  }

  public save(record: Course){
    return this._httpCliente.post<Course>(this.api, record).pipe(first());
    
  }
}
