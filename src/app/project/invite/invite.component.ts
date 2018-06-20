import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  private items: Object[] = [
    {
      id: 1,
      name: 'zhangsan',
    },
    {
      id: 2,
      name: 'lisi',
    },
    {
      id: 3,
      name: 'wangwu',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id: Number; name: String}) {
    return user && user.name ? user.name : '';
  }
}
