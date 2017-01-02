import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HairService } from '../../services/hair.service';

@Component({
  selector: 'app-hair-details',
  templateUrl: './hair-details.component.html',
  styleUrls: ['./hair-details.component.scss']
})
export class HairDetailsComponent implements OnInit {
  private offer: any;
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute, private hairService: HairService) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = (params['id']));
    this.offer = this.hairService.getById(this.id);

  }

}
