import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { ManicureService } from '../../services/manicure.service';
import { UserService } from '../../services/user.service';

const BUY_SUCCESS: string = 'Successfully added to your offers!';
const BUY_ERROR: string = 'You have to be logged in to buy this offer!';

@Component({
  selector: 'app-manicure-details',
  templateUrl: './manicure-details.component.html',
  styleUrls: ['./manicure-details.component.scss']
})
export class ManicureDetailsComponent implements OnInit {
  private offer: any;
  id: any;
  paramsSub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private manicureService: ManicureService,
    private userService: UserService,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = (params['id']));
    this.offer = this.manicureService.getById(this.id);
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
