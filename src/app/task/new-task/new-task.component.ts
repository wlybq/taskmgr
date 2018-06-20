import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  private priorities: Object[] = [
    {
      label: 'emergency',
      value: 1
    },
    {
      label: 'important',
      value: 2
    },
    {
      label: 'normal',
      value: 3
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  createNewTask() {
  }

}
