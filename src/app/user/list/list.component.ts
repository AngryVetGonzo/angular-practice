import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from './user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: User[];
  @Input() user = User;
  @Output() editClicked = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }


  onEdit() {
    this.editClicked.emit('a new value');
  }
}
