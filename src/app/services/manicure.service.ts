import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { ManicureOffers } from '../data/mock-manicure';

@Injectable()
export class ManicureService {

  constructor(private http: Http) { }

    getAll() {
    return ManicureOffers;
  }
    getById(id) {
  let element = ManicureOffers.map(function(x) {return x.Id; }).indexOf(id);
  let found = ManicureOffers[element];
  return found;
  }

}
