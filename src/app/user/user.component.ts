import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [
    new User('jesus', 'gonzalez'),
    new User('bob', 'daily'),
    new User('shoe', 'head')
  ];

  constructor() { }

  ngOnInit() {
  }

}
