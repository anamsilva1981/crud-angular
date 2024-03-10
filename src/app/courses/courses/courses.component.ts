import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, delay, first, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  private _courseService = inject(CoursesService);
  public dialog = inject(MatDialog);

  public courses$!: Observable<Course[]>;
  public displayedColumns = ['name', 'category'];

  public ngOnInit(): void {
    this.courses$ = this._courseService.list().pipe(first(),
      catchError(error => { this.onError('Erro ao carregar cursos'); return of([]) }
      ),
      delay(1000), tap(courses => console.log(courses)));
  }

  public onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
