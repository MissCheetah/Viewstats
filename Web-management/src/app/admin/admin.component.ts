import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

declare let $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {

  users = [];

  constructor(private api: ApiService) {

    $(document).ready(function () {
      $('[data-toggle="offcanvas"]').click(function () {
        $("#navigation").toggleClass("hidden-xs");
      });
    });
    this.api.getUsers().subscribe(
      response => {
        this.users = response;
      });

  }

  ngOnInit() {
  }

  resetPassword(index) {
    this.api.resetPassword(index).subscribe(res => {
      console.log(res);
    });
  }

  deleteUser(index) {
    this.api.deleteUser(index).subscribe(res => {
      alert("L'utilisateur a bien été supprimé ! Raffraîchissez votre navigateur.");
    });
  }





}
