import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  private _fb = inject(FormBuilder);
  private _courseService = inject(CoursesService);
  private _snackBar = inject(MatSnackBar);
  private _location = inject(Location)

  public form!: FormGroup;


  public ngOnInit(): void {

    this.form = this._fb.group({
      name: [''],
      category: [''],
    })
  }

  public onSubmit() {
    this._courseService.save(this.form.value).subscribe(data => this.onSucess(), error => this.onError());
    this.onCancel();
  }

  public onCancel() {
    this._location.back();
  }

  public onSucess() {
    this._snackBar.open('Curso salvo com sucess', '', { duration: 5000 });
  }

  private onError() {
    this._snackBar.open('Erro ao salvar curso', '', { duration: 5000 });
  }

}
