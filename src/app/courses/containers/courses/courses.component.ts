import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  private _route = inject(ActivatedRoute);
  private _snackBar = inject(MatSnackBar);

  public dialog = inject(MatDialog);
  public courses$!: Observable<Course[]>;
  public displayedColumns = ['name', 'category', 'actions'];

  public ngOnInit(): void {
    this.refresh();
  }

  public refresh() {
    this.courses$ = this._courseService.list().pipe(first(),
      catchError(error => { this.onError('Erro ao carregar cursos'); return of([]) }
      ),
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

  public onEdit(course: Course) {
    this._router.navigate(['edit', course._id], { relativeTo: this._route })
  }

  public onRemove(course: Course) {
    this.refresh,
    this._courseService.remove(course._id).subscribe(() => {
      this._snackBar.open('Curso salvo com sucess', 'x', { duration: 2000 });
    },
    error => this.onError('Erro ao tentar remover curso')
    )
  }

}


