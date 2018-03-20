import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user$: Observable<User>
  constructor(private usersService: UsersService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user$ = this.route.paramMap
      .switchMap((params: ParamMap) => this.usersService.getUser(params.get('id')));
  }

  onSaveUser(user: User){
    console.log('saving user')
    this.usersService.updateUser(user).subscribe(()=> this.router.navigate(['../../list'],{ relativeTo: this.route }));
  }

}
