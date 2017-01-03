import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { HairService } from '../../services/hair.service';
import { UserService } from '../../services/user.service';

const BUY_SUCCESS: string = 'Successfully added to your offers!';
const BUY_ERROR: string = 'You have to be logged in to buy this offer!';

@Component({
  selector: 'app-hair-details',
  templateUrl: './hair-details.component.html',
  styleUrls: ['./hair-details.component.scss']
})
export class HairDetailsComponent implements OnInit {
  private offer: any;
  id: any;
  paramsSub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private hairService: HairService,
    private userService: UserService,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = (params['id']));
    this.offer = this.hairService.getById(this.id);

  }

  buy(offer) {
    if (this.userService.getLoggedUser()) {
      this.userService.buy(offer);
      this.snackBar.open(BUY_SUCCESS, '', { duration: 3000 });
    } else {
      this.snackBar.open(BUY_ERROR, '', { duration: 3000 });
    }
  }
}
