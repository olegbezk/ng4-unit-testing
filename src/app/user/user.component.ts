import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {
  user: {name: string};
  isLoggedIn = false;
  data: string;

  constructor(private userService: UserService, private dataSerevice: DataService) {}

  ngOnInit() {
    this.user = this.userService.user;
    this.dataSerevice.getDetails().then((data: string) => this.data = data);
  }

}
