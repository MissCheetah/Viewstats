import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-list-commercants',
  templateUrl: './list-commercants.component.html',
  styleUrls: ['./list-commercants.component.scss'],
})
export class ListCommercantsComponent implements OnInit {
  commercants;

  constructor(private api: ApiService) {
      this.api.getCommercants({}).subscribe( response => {
      this.commercants = response;
      console.log(this.commercants);
    });
  }

  ngOnInit() {}

}
