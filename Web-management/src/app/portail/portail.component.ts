import { Component, OnInit } from '@angular/core';
import {ConnexionService } from '../connexion/connexion.service'
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-portail',
  templateUrl: './portail.component.html',
  styleUrls: ['./portail.component.css']
})
export class PortailComponent implements OnInit {
  profile ="";
  constructor(private con: ConnexionService ) {}

  ngOnInit() {
  }

  sendProfile(i) {
    if (i==0) {
      this.profile = "manager";
    }
    if (i==1) {
      this.profile = "admin";
    }
    this.con.SendProfile(this.profile);
  }
}
