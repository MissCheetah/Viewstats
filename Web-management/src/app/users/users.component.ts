import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

declare let $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private api: ApiService) {
    $(document).ready(function(){
      $('[data-toggle="offcanvas"]').click(function(){
          $("#navigation").toggleClass("hidden-xs");
      });
   });
   this.api.getUsers().subscribe(
      response => {
        this.users = response;
      })

  }

  ngOnInit() {
  }

}
