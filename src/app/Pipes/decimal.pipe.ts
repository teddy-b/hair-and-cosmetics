import { Pipe, PipeTransform } from '@angular/core';
import { OfferModel } from '../models/offer-model';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(price: string) {
    return parseFloat(price).toFixed(2);
  }

}
