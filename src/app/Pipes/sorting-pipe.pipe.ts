import { Pipe, PipeTransform } from '@angular/core';
import { OfferModel } from '../models/offer-model';

@Pipe({
  name: 'sortingPipe'
})
export class SortingPipe implements PipeTransform {

  transform(offers: OfferModel[], parameters: string[]): OfferModel[] {
    return offers.sort((a, b) => {
            switch (parameters[0]) {
                case 'Price':
                    return parameters[1] === 'asc' ?
                        a.Price.localeCompare(b.Price) :
                        b.Price.localeCompare(a.Price);
            }
        });
  }

}
