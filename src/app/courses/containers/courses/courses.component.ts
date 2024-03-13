import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, first, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  private _courseService = inject(CoursesService);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute)

  public dialog = inject(MatDialog);
  public courses$!: Observable<Course[]>;
  public displayedColumns = ['name', 'category', 'actions'];

  public ngOnInit(): void {
    this.courses$ = this._courseService.list().pipe(first(),
      catchError(error => { this.onError('Erro ao carregar cursos'); return of([]) }
      ),
      // delay(1000), 
      // tap(courses => console.log(courses))
    );
  }

  public onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  public onAdd() {
    this._router.navigate(['new'], { relativeTo: this._route })
  }

}
