import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  private _fb = inject(FormBuilder);


  public form!: FormGroup;


  public ngOnInit(): void {

    this.form = this._fb.group({
      name: [null],
      category: [null],
    })
  }

}
