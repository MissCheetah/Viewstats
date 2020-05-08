import { Component, OnInit } from '@angular/core';
import {CardService} from "../card/card.service";
import {ApiService} from "../api.service";

declare let $: any;


@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.css']
})
export class ManagerViewComponent implements OnInit {

  title = 'app';
  commercants;

  constructor(private cardService : CardService, private api: ApiService){
    $(document).ready(function(){
        $('[data-toggle="offcanvas"]').click(function(){
            $("#navigation").toggleClass("hidden-xs");
        });
     });
    this.api.getCommercants().subscribe(
          response => {
              this.commercants = response;
              console.log(this.commercants);

          },
          error => {
              console.log(error);
          }
      );
  }


  SeeMore(index) {

      console.log(index);
      this.cardService.SendCommercant(index);
  }

  deleteCommercant(index) {
    console.log(index);
      this.api.deleteCommercant(index).subscribe(
          reponse => {
              this.api.getCommercants().subscribe(
                  res => {
                      this.commercants = res;
                  });


              },

          error => {
              console.log("no");
          }
      );
  }


  ngOnInit() {
  }

}

