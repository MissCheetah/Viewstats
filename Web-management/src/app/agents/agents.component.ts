import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {CommercantsByAgentCardService} from "../commercants-by-agent-card/commercants-by-agent-card.service";

declare let $: any;

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  agents = [];

  constructor(private api: ApiService, private cmac : CommercantsByAgentCardService) {
    $(document).ready(function(){
      $('[data-toggle="offcanvas"]').click(function(){
          $("#navigation").toggleClass("hidden-xs");
      });
   });
   this.api.getAgents().subscribe(
      response => {
        this.agents = response;
      })

    }
  ngOnInit() {
  }

  CommercantsByAgent(index) {

    console.log(index);
    this.cmac.SendAgent(index);
  }

}
