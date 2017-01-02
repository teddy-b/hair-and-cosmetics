import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OfferModel } from '../models/offer-model';
import { HairService } from '../services/hair.service';

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

  constructor(private hairService: HairService) { }

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


}
