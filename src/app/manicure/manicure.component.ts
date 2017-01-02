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

  constructor(private manicureService: ManicureService) { }

  ngOnInit() {
    this.manicureOffers = this.manicureService.getAll();
  }

}
