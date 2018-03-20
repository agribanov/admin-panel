import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>
  displayedColumns = ['name', 'surname', 'login', 'email', 'actions'];

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.users$ = this.usersService.getList();
  }

  editUser(id: string){
    this.router.navigate(['../edit', id], {relativeTo: this.route});
  }

  addUser(){
    this.router.navigate(['../add'], {relativeTo: this.route});
  }

  deleteUser(id: string){
    this.users$ = this.usersService.deleteUser(id)
      .switchMap(() => this.usersService.getList())
  }

}
