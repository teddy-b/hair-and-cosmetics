import { Component, OnInit } from '@angular/core';
import { OfferModel } from '../models/offer-model';
import { ManicureService } from '../services/manicure.service';

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

  constructor(private manicureService: ManicureService) { }

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

}
