import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  private projects: Object[] = [
    {
      id: 1,
      name: 'enterprise cooperation project',
      coverImg: 'assets/covers/0.jpg',
      description: 'this is a enterprise cooperation project'
    },
    {
      id: 2,
      name: 'enterprise cooperation project',
      coverImg: 'assets/covers/0.jpg',
      description: 'this is a enterprise cooperation project'
    },
    {
      id: 3,
      name: 'enterprise cooperation project',
      coverImg: 'assets/covers/0.jpg',
      description: 'this is a enterprise cooperation project'
    },
    {
      id: 4,
      name: 'enterprise cooperation project',
      coverImg: 'assets/covers/0.jpg',
      description: 'this is a enterprise cooperation project'
    },
    {
      id: 5,
      name: 'enterprise cooperation project',
      coverImg: 'assets/covers/0.jpg',
      description: 'this is a enterprise cooperation project'
    },
    {
      id: 6,
      name: 'enterprise cooperation project',
      coverImg: 'assets/covers/0.jpg',
      description: 'this is a enterprise cooperation project'
    },
  ];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  newProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: {
        msg: 'Hello world'
      }
    });

    dialogRef.afterClosed().subscribe(res => console.log(res));
  }

  inviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

}
