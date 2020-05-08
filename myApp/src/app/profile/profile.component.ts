import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  added = false;
  clear = true;
  newAgent = <any>{};
  agentEmail = '';
  agentId = 1;

  logForm() {

    this.agentEmail = this.newAgent.email;
    this.api.getUserByEmailPWD(this.agentEmail, this.newAgent.prevPWD).subscribe( response => {
      let agent = response;
      if (agent.length === 0) {
        alert("L'email ou le mot de passe indiqué ne sont pas corrects, merci de réessayer");
      }
      else {
        this.agentId = agent[0].id;
        this.api.updatePassword(this.newAgent.email, this.newAgent.newPWD, this.newAgent.prevPWD).subscribe( res => {
              console.log(response);
              this.added = true;
              this.clear = false;
        });

      }
    });
  }

  refresh() {
    this.added = false;
    this.clear = true;
  }
  constructor(private api: ApiService) { }

  ngOnInit() {}

}
