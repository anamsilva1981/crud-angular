import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  private _router = inject(Router);
  private _route = inject(ActivatedRoute)

  public readonly displayedColumns = ['name', 'category', 'actions'];

  @Input() public courses: Course[] = [];
  @Output() add = new EventEmitter(false);

  constructor() { }

  ngOnInit(): void {

  }

  public onAdd() {
    this.add.emit(true);
  }

}
