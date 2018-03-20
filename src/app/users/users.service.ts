import { Injectable } from '@angular/core';
import { User } from './models/User';
import { USERS } from './users-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

const USERS_URL = 'http://5a85a7b1085fdd00127042ad.mockapi.io/users';

@Injectable()
export class UsersService {
  users: User[] = USERS

  constructor(private http:HttpClient) { }

  getList(): Observable<User[]> {
    return this.http.get<User[]>(USERS_URL);
  }

  getUser(id: string): Observable<User>{
    const url = this.getUserUrl(id);

    return this.http.get<User>(url);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(USERS_URL, user);
  }

  updateUser(user: User) {
    const url = this.getUserUrl(user.id);

    return this.http.put<User>(url, user);
  }

  deleteUser(userId: string) {
    const url = this.getUserUrl(userId);
    return this.http.delete(url);
  }

  getUserUrl(id: string): string{
    return `${USERS_URL}/${id}`;
  }

}
