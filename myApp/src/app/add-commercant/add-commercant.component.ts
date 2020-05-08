import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-add-commercant',
  templateUrl: './add-commercant.component.html',
  styleUrls: ['./add-commercant.component.scss'],
})
export class AddCommercantComponent implements OnInit {
  added = false;
  clear = true;
  newCommercant = <any>{};
  agentEmail = '';
  agentId = 1;

  logForm() {

    this.agentEmail = this.newCommercant.agent_email;
    this.api.getAgentEmail(this.agentEmail).subscribe( response => {
      let agent = response;
      if (agent.length === 0) {
        alert("L'email indiqué ne fait pas partie de la base de nos agents, merci de réessayer");
      }
      else {
        this.agentId = agent[0].id;
        this.api.addCommercant(this.newCommercant.prenom, this.newCommercant.nom, this.newCommercant.secteur, this.newCommercant.ville, this.newCommercant.code_postal, this.newCommercant.revenu_journalier, this.agentId, this.agentEmail).subscribe( res => {
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
