import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { UserService } from '../services/user.service';
import { UserModel } from '../models/user-model';

const MANDATORY_FIELDS = 'You have to enter user email and password!';
const REGISTER_SUCCESS: string = 'Successfully registered! Please login!';
const REGISTER_ERROR: string = "User already exist!";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  user: UserModel = { email: '', password: '' };
  msg: string = '';

  constructor(
    private userService: UserService,
    private snackBar: MdSnackBar,
    private router: Router
  ) { }

  register() {
    if (!this.user.email || !this.user.password) {
      this.msg = MANDATORY_FIELDS;
    } else if (!this.userService.register(this.user)) {
      this.msg = REGISTER_ERROR;
    } else {
      this.snackBar.open(REGISTER_SUCCESS, '', { duration: 3000 });
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() { }
}
