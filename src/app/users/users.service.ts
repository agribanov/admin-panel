import { Injectable } from '@angular/core';
import { User } from './models/User';
import { USERS } from './users-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UsersService {
  users: User[] = USERS

  constructor() { }

  getList(): Observable<User[]> {
    return of(this.users);
  }

  getUser(id: string): Observable<User>{
    return of(this.users.find((c) => c.id === id ));
  }

  addUser(user: User): Observable<User> {
    const id = Date.now();
    const newUser:User = {...user};
    newUser.id = String(Date.now());

    this.users = [...this.users, newUser];

    return of(newUser);
  }

  updateUser(user: User) {
    this.users = this.users.map(c => c.id === user.id ? user : c);

    return of(user);
  }

  deleteUser(userId: string) {
    this.users = this.users.filter(c => c.id !== userId);

    return of(null);
  }

}
