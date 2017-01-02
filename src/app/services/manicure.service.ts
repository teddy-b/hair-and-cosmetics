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

}
