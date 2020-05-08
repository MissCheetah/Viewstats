import { Component, OnInit } from '@angular/core';
import {CommercantsByAgentCardService} from "../commercants-by-agent-card/commercants-by-agent-card.service";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-commercants-by-agent-card',
  templateUrl: './commercants-by-agent-card.component.html',
  styleUrls: ['./commercants-by-agent-card.component.css']
})
export class CommercantsByAgentCardComponent implements OnInit {
  agent_id = 1;
  CommercantsByAgent;
  Agent = {}

  constructor(private api: ApiService, public cmac : CommercantsByAgentCardService) {
    this.cmac.agent.subscribe((agent) => {
      this.agent_id = agent;
      console.log(this.agent_id);
      this.api.getAgents({"id" : this.agent_id}).subscribe( res => {
        this.Agent = res;
        console.log(this.Agent);
      });
      this.api.getCommercants({"agent_id" : this.agent_id}).subscribe( res =>
      {
        this.CommercantsByAgent = res;
        console.log(this.CommercantsByAgent);
      },
        error => {
          console.log(error);
        });
    });

  }


  ngOnInit() {
  }

}
