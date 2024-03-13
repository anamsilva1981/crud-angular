import { Course } from './../model/course';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
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
  
  public save(record: Partial<Course>){
    console.log(record)
    
    if (record._id){
      return this.update(record)
    }
    return this.create(record);
  }
  
  public create(record: Partial<Course>){
    return this._httpCliente.post<Course>(this.api, record).pipe(first());
    
  }
  
  public update(record: Partial<Course>){
    return this._httpCliente.put<Course>(`${this.api}/${record._id}`, record).pipe(first());    
  }

  public remove(id: string){
    return this._httpCliente.delete(`${this.api}/${id}`).pipe(first());    
  }

}


