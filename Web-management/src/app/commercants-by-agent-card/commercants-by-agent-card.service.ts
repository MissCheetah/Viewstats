import {EventEmitter, Output} from "@angular/core";

export class CommercantsByAgentCardService {
    @Output() agent: EventEmitter<any> = new EventEmitter();
    SendAgent(agent) {
        console.log('transmission item ok')
            this.agent.emit(agent);
        }
}
