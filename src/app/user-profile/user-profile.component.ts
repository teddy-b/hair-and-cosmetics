import { Component, OnInit, DoCheck, ViewEncapsulation } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {
  loggedUser: string = '';
  currentUser: UserModel;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loggedUser = this.userService.getLoggedUser();
    this.currentUser = this.userService.getUser();
  }

  ngDoCheck() {
    this.loggedUser = this.userService.getLoggedUser();
    this.currentUser = this.userService.getUser();
  }
}
