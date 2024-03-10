import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  private _courseService = inject(CoursesService);
  // private _httpCliente = inject(HttpClient)

  public courses: Course[] = [];

  public displayedColumns = ['name', 'category'];

  constructor() {

  }

  public ngOnInit(): void {

    this.courses = this._courseService.list();
  }

}
