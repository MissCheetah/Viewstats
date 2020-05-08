import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CardService} from "./card.service";
import {FooterService} from "../footer/footer.service";
import { ApiService } from '../api.service';
declare let $: any;
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    card = {};
    commercant = { code_postal: 0,
    id: 2,
    imgsrc: "assets/captain.jpg",
    last_update: "2 minutes",
    nom: "America",
    prenom: "Captain",
    revenu: 400,
    secteur: "Armement contre Thanos",
    ville: "New-York" };

    constructor(private cardService: CardService, private f: FooterService, private api: ApiService) {

        this.cardService.commercant.subscribe((commercant) => {

            console.log(commercant);
            this.api.getCommercantById(commercant).subscribe(
                response => {
                    this.card = response;
                    this.commercant = this.card[0];
                    console.log(this.card);
                },
                error => {
                    console.log(error);
                }
            );
        });

    }

    ngOnInit() {

    }

    getName() {
        return this.commercant.prenom + this.commercant.nom;

    }



    formatNumber(nb: number) {
        const stringNb = nb + '';
        let stringFormatted = '';
        for (let i = 0; i < stringNb.length; i++) {
            stringFormatted = stringFormatted + stringNb[stringNb.length - i - 1];
            if ((i + 1) % 3 === 0) {
                stringFormatted = stringFormatted + ' ';
            }
        }
        return stringFormatted.split('').reverse().join('');
    }
}
