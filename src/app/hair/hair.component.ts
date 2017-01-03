import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MdSnackBar} from '@angular/material';

import {OfferModel} from '../models/offer-model';
import {HairService} from '../services/hair.service';
import {UserService} from '../services/user.service';

const BUY_SUCCESS: string = 'Successfully added to your offers!';
const BUY_ERROR: string = 'You have to be logged in to buy this offer!';

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HairComponent implements OnInit {
  private hairOffers: OfferModel[];

  private filterBy: string;
  private sortBy: string[];
  private orderBy: string[];
  private sortingBy: string;
  private orderingBy: string;

  constructor(private hairService: HairService,
              private userService: UserService,
              private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.hairOffers = this.hairService.getAll();

    this.sortBy = ['Price'];
    this.sortingBy = 'Price';
    this.orderBy = ['asc', 'desc'];
    this.orderingBy = 'desc';
  }

  onInput(ev: any) {
    this.filterBy = ev.target.value;
  }

  onSort(ev: any) {
    this.sortingBy = ev.target.value;
    console.log(this.sortingBy);
  }

  onOrder(ev: any) {
    this.orderingBy = ev.target.value;
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
