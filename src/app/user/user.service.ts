import { User } from './list/user.model';

export class UserService {
  private users: User[] = [
    new User('jesus', 'gonzalez'),
    new User('bob', 'doe'),
    new User('purified', 'water')
  ];

  addUser(user: User) {
    this.users.push(user);
    console.log(this.users);
  }

  getUsers() {
    return this.users.slice();
  }

  deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }
}
