import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Course } from '../model/course';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _httpCliente = inject(HttpClient)
  private readonly api = 'api/courses';

  public list() {
    return this._httpCliente.get<Course[]>(this.api)
    .pipe(first(), 
    // delay(1000)
    )
  }

  public loadById(id: string){
    return this._httpCliente.get<Course>(`${this.api}/${id}`)
  }

  public save(record: Course){
    return this._httpCliente.post<Course>(this.api, record).pipe(first());
  }
}
