import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';


@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  private lists: Object[] = [
    {
      id: 1,
      name: 'with to be done',
      tasks: [
        {
          id: 'task-1',
          desc: 'task first: Buy a coffee at startbucks',
          completed: true,
          priority: 3,
          owner: {
            id: 'owner-1',
            name: 'zhangsan',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 'task-2',
          desc: 'task secondly: Finish the PPT assigned by the boss',
          completed: false,
          priority: 2,
          owner: {
            id: 'owner-2',
            name: 'lisi',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: 'underway',
      tasks: [
        {
          id: 'task-3',
          desc: 'task thirdly: Project code review',
          completed: false,
          priority: 1,
          owner: {
            id: 'owner-3',
            name: 'wangwu',
            avatar: 'avatars:svg-6'
          },
          dueDate: new Date(),
        },
        {
          id: 'task-4',
          desc: 'task fourthly: Customization project plan',
          completed: false,
          priority: 2,
          owner: {
            id: 'owner-4',
            name: 'lisi',
            avatar: 'avatars:svg-2'
          },
          dueDate: new Date(),
        },
      ]
    },
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  newTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent);
  }

  copyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {
      data: {
        lists: this.lists
      }
    });
  }

}
