import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { UserService } from '../services/user.service';
import { UserModel } from '../models/user-model';

const MANDATORY_FIELDS = 'You have to enter user email and password!';
const LOGIN_SUCCESS: string = 'Successfully logged in!';
const LOGIN_ERROR: string = "Email and password don't match!";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  user: UserModel = { email: '', password: '' };
  msg: string = '';

  constructor(
    private userService: UserService,
    private snackBar: MdSnackBar,
    private router: Router
  ) { }

  login() {
    if (!this.user.email || !this.user.password) {
      this.msg = MANDATORY_FIELDS;
    } else if (!this.userService.login(this.user)) {
      this.msg = LOGIN_ERROR;
    } else {
      this.snackBar.open(LOGIN_SUCCESS, '', { duration: 3000 });
      this.router.navigate(['/']);
    }
  }

  ngOnInit() { }
}
