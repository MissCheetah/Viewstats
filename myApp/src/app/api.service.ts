import { Injectable } from '@angular/core';
import { URLSearchParams} from "@angular/http";
import { Profile } from 'selenium-webdriver/firefox';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 

@Injectable()
export class ApiService {
    headers = new Headers({
        'Authorization': 'Basic'
    });
    constructor(private http: HttpClient) {
    }

    /* Custom getRessources method to construct the get http query with random parameters */
    private getRessources(ressourceName, parameters) {
        let url = APIQueryConstructor.buildGETQuery(ressourceName, parameters);
        const options = new RequestOptions({headers: this.getHeader()});
        return this.http.get(url, options);
    }

     getFormBodyFromObject(o: any): string { 
          const formBody = []; 
          for (const property in o) { 
            const encodedKey = encodeURIComponent(property); 
            const encodedValue = encodeURIComponent(o[property]); 
            formBody.push(encodedKey + '=' + encodedValue); 
          } 
          return formBody.join('&');
         }
        getHeader(): HttpHeaders { 
          return new HttpHeaders({ 
            'Content-Type': 'application/x-www-form-urlencoded' 
            }); 
        }

    /* --------  API services for myApp -------- */

    public getCommercantsByAgent(index) {
        let parameters = {"agent_id" : index};
        let commercants = this.getRessources("commercants", parameters);
        console.log(commercants);
        return commercants;
    }

    /* Function for testing purposes - to delete once the auth session is working  */
    public getCommercants(parameters) {
        let commercants = this.getRessources("commercants", parameters);
        console.log(commercants);
        return commercants;
    }

    public addCommercant(prenom, nom, secteur, ville, code_postal, revenu_journalier, agent_id, agent_email) {
        let url = APIQueryConstructor.buildPOSTQuery("commercants/create");
        let parameters = {"prenom": prenom, "nom": nom, "secteur": secteur, "ville": ville, "code_postal": code_postal, "revenu_journalier": revenu_journalier, "agent_id": agent_id, "agent_email": agent_email}  ;
        let result = this.http.post(url, this.getFormBodyFromObject(parameters), {headers: this.getHeader()});
        return result;
    }
    public getAgentEmail(email) {
        let parameters = { "email" : email};
        let Agent = this.getRessources("agents", parameters);
        return Agent;
    }

    public getUserByEmailPWD(email, PWD) {
            let parameters = { "email" : email, "password": PWD};
            let Agent = this.getRessources("users", parameters);
            return Agent;
        }

    public updatePassword(email, newPWD, prevPWD) {
                let url = APIQueryConstructor.buildPOSTQuery("users/updatePassword?email="+email);
                let parameters = {"email": email, "password": newPWD};
                 let result = this.http.post(url, this.getFormBodyFromObject(parameters), {headers: this.getHeader()});
                return result;


    }

     /* --------  API services for myApp END -------- */
}

/* APIQueryConstructor class definition */
class APIQueryConstructor {
    API_URL;
    constructor() {
        this.API_URL = 'http://localhost:4020/';
    }

    static get API_URL() {
        return 'http://localhost:4020/';
    }

    public static buildGETQuery(ressourceName, parameters) {
        let query = this.API_URL + ressourceName;
        query += this.buildParameters(parameters);
        return query;
    }

    public static buildPOSTQuery(ressourceName) {
        let query = this.API_URL + ressourceName;
        return query;
    }

    private static buildParameters(parameters) {
        let queryParameters = "";
        for (var key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                if (Array.isArray(parameters[key])) {
                    queryParameters += this.writeMultipleValues(key, parameters[key]);
                }
                else {
                    queryParameters += this.writeSingleValue(key, parameters[key]);
                }
            }
        }
        if (Object.keys(parameters).length > 0) {
            queryParameters = "?" + queryParameters.slice(0, -1);
        }
        return queryParameters;
    }

    private static writeMultipleValues(key, values) {
        let linkedValues = "";
        for (let value of values) {
            linkedValues += key + "=" + value + "&";
        }
        return linkedValues;
    }

    private static writeSingleValue(key, value) {
        return key + "=" + value + "&";
    }
}
