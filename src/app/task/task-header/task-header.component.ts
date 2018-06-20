import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() private header: String;
  @Output() newTaskEmit: EventEmitter<void> = new EventEmitter<void>();
  @Output() copyTaskEmit: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  newTaskClick() {
    this.newTaskEmit.emit();
  }

  copyTaskClick() {
    this.copyTaskEmit.emit();
  }

}
