import { Component, Input, OnInit, inject } from '@angular/core';
import { Course } from '../model/course';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  private _router = inject(Router);
  private _route = inject(ActivatedRoute)

  @Input() public courses: Course[] = [];
  public readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() { }

  ngOnInit(): void {

  }

  public onAdd() {
    this._router.navigate(['new'], { relativeTo: this._route })
  }

}
