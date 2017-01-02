import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { HairOffers } from '../data/mock-hair';


@Injectable()
export class HairService {

  constructor(private http: Http) {}

  getAll() {
    return HairOffers;
  }
  getById(id) {
  let element = HairOffers.map(function(x) {return x.Id; }).indexOf(id);
  let found = HairOffers[element];
  return found;
  }
}
