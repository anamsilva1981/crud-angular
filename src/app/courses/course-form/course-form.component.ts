import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  private _fb = inject(FormBuilder);
  private _courseService = inject(CoursesService);
  private _snackBar = inject(MatSnackBar);

  public form!: FormGroup;


  public ngOnInit(): void {

    this.form = this._fb.group({
      name: [null],
      category: [null],
    })
  }

  public onSubmit(){
    this._courseService.save(this.form.value).subscribe(data => console.log(data), error => this.onError())
  }
  
  public onCancel(){
    console.log('onCancel');
  }

  private onError(){
    this._snackBar.open('Erro ao salvar curso', '', { duration: 5000});
  } 

}
