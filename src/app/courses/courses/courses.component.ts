import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, delay, first, tap } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  private _courseService = inject(CoursesService);

  public courses$!: Observable<Course[]>;
  public displayedColumns = ['name', 'category'];

  public ngOnInit(): void {
    this.courses$ = this._courseService.list().pipe(first(), delay(2000), tap(courses => console.log(courses)));
  }

}
