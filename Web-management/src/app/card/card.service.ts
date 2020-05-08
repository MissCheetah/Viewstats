import {EventEmitter, Output} from "@angular/core";

export class CardService {
    @Output() commercant: EventEmitter<any> = new EventEmitter();
    SendCommercant(commercant) {
        console.log('transmission item ok')
            this.commercant.emit(commercant);
        }
}