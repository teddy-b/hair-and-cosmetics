import {Component, OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';

import {OfferModel} from '../models/offer-model';
import {ManicureService} from '../services/manicure.service';
import {UserService} from '../services/user.service';

const BUY_SUCCESS: string = 'Successfully added to your offers!';
const BUY_ERROR: string = 'You have to be logged in to buy this offer!';

@Component({
  selector: 'app-manicure',
  templateUrl: './manicure.component.html',
  styleUrls: ['./manicure.component.scss']
})
export class ManicureComponent implements OnInit {
  private manicureOffers: OfferModel[];

  private filterBy: string;
  private sortBy: string[];
  private orderBy: string[];
  private sortingBy: string;
  private orderingBy: string;

  constructor(private manicureService: ManicureService,
              private userService: UserService,
              private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.manicureOffers = this.manicureService.getAll();
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
