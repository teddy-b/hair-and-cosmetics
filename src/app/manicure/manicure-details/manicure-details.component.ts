import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManicureService } from '../../services/manicure.service';

@Component({
  selector: 'app-manicure-details',
  templateUrl: './manicure-details.component.html',
  styleUrls: ['./manicure-details.component.scss']
})
export class ManicureDetailsComponent implements OnInit {
  private offer: any;
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute, private manicureService: ManicureService) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = (params['id']));
    this.offer = this.manicureService.getById(this.id);
  }

}
