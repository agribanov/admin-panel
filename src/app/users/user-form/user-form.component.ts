import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() user:User
  @Output() saveUser = new EventEmitter<User>()

  constructor() { }

  onSubmit($event){
    $event.preventDefault();
    this.saveUser.emit(this.user);
  }

}
