import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ConnexionService } from './connexion.service';
import { ApiService } from '../api.service';
import {Router} from "@angular/router";

declare let $: any;

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  profile: string;
  email: string ;
  password: string;
  user;

  constructor(private con: ConnexionService, private api: ApiService, private route: Router) {

  }


  ngOnInit() {

  }



  login() {
    const allInfo = `My email is ${this.email}. My password is ${this.password}. My profile is ${this.profile}`;
        alert(allInfo);
    this.api.login(this.email, this.password, this.profile).subscribe( response => {
      console.log(response['_body']);
      if (response['_body'] == 0) {
        $('#email_form').addClass('has-error');
        $('#password_form').addClass('has-error');

      }
      else {
         this.user = response;
         console.log(this.user[0]);
         if (this.user[0].profile == 'admin') {
          this.route.navigate(['/admin/users']);
         }
         if (this.user[0].profile == 'manager') {
          this.route.navigate(['/Viewstats']);
         }

      }
          },
          error => {
              console.log(error);
          }
    );

  }

}
