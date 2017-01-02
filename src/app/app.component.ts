import { Component, ViewEncapsulation, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [UserService]
})
export class AppComponent {
  title: string = 'Hair & Cosmetics';
  loggedUser: string = '';
  isHidden = false;

  constructor(private userService: UserService) { }

  btnToggle() {
    this.isHidden = !this.isHidden;
  }

  logout(): void {
    this.userService.logout();
    this.loggedUser = '';
  }

  ngOnInit() {
    this.loggedUser = this.userService.getLoggedUser();
  }

  ngDoCheck() {
    this.loggedUser = this.userService.getLoggedUser();
  }
}
