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
  private data: OfferModel;

  constructor(private hairService: HairService) { }

  ngOnInit() {
    // this.hairService.getAll()
    //         .subscribe(resp => this.data = resp);
  }


}
