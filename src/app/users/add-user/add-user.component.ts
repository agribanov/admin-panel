import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User
  constructor(private usersService: UsersService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = new User;
  }

  onSaveUser(user: User){
    console.log('saving user', user)
    this.usersService.addUser(user).subscribe(()=> this.router.navigate(['../list'],{ relativeTo: this.route }));
  }

}
