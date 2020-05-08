import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modify-card',
  templateUrl: './modify-card.component.html',
  styleUrls: ['./modify-card.component.css']
})
export class ModifyCardComponent implements OnInit {
  nom;
  prenom;
  profile;
  email;
  password;
  password_confirm;

  constructor(private api: ApiService, private route: Router) { }

  ngOnInit() {
  }

  addUser() {
    console.log("add");
  }

}
