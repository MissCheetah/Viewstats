import {EventEmitter, Output} from "@angular/core";

export class ConnexionService {
    @Output() profile: EventEmitter<any> = new EventEmitter();
    SendProfile(profile) {
            this.profile.emit(profile);
            console.log(profile);
        }
}