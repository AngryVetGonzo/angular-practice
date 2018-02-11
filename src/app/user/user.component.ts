import { Component } from '@angular/core';

import { User } from './list/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent {

  constructor( private userService: UserService) { }


  onSave(value: string) {
    const user = new User(value, 'Last name');
    this.userService.addUser(user);
  }


}
