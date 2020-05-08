import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { URLSearchParams} from "@angular/http";
import { Profile } from 'selenium-webdriver/firefox';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 


@Injectable()
export class ApiService {
    headers = new Headers({
        'Authorization': 'Basic'
    });
    constructor(private http: HttpClient) {
    }

    public onUpload(file) {
        //let url = APIQueryConstructor.buildPOSTQuery("commercants/upload");
        const uploadData = new FormData();
  uploadData.append('file', file, file.name);
        let parameters = {"file": file}  ;
        console.log(file);
        let result = this.http.post('http://127.0.0.1:5000/commercants/upload', uploadData);
        return result;
    }

    getimgSrc(filename) {
        let url = APIQueryConstructor.buildPOSTQuery("commercants/image");
        let parameters = {"filename": filename}  ;
        let result = this.http.post(url, parameters);
        return result;
    }


    public getCommercants(parameters = {}) {
        let articles = this.getRessources("commercants", parameters);
        console.log(articles);
        return articles;
    }

    public getAgents(parameters = {}) {
        let users = this.getRessources("agents", parameters);
        return users;
    }

    public getUsers(parameters = {}) {
        let users = this.getRessources("users", parameters);
        return users;
    }

    public getNbUsers(parameters = {}) {
        let nb = this.getRessources("users/getNb", parameters);
        return nb;
    }
    public getNbComm(parameters = {}) {
        let users = this.getRessources("commercants/getNb", parameters);
        return users;
    }

    public addUser(prenom, nom, email, profile) {
        let url = APIQueryConstructor.buildPOSTQuery("users/create");
        let parameters = {"prenom": prenom, "nom": nom, "email": email, "profile": profile, "password": "NewStrongPassworld123!"}  ;
        let result = this.http.post(url, this.getFormBodyFromObject(parameters), {headers: this.getHeader()});
        return result;
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



    public getCommercantById(id){
        let parameters = {"id": id};
        let commercants = this.getRessources("commercants", parameters);
        return commercants;
    }

    public getCommercantByAgent(Agent_id){
        let parameters = {"id": Agent_id};
        let commercants = this.getRessources("commercants", parameters);
        return commercants;
    }

    public addCommercant(id, prenom, nom, revenu, imgsrc, ville, code_postal, secteur) {
        let url = APIQueryConstructor.buildPOSTQuery("commercants/create");
        let parameters = { "id": id, "prenom": prenom, "nom": nom, "revenu": revenu, "imgsrc": imgsrc, "ville": ville, "code_postal": code_postal, "secteur": secteur};
        console.log(parameters);
        let result = this.http.post(url, parameters);
        return result
    }

    public deleteCommercant(id) {
    let url = APIQueryConstructor.buildPOSTQuery("commercants/delete/"+id);
                let result = this.http.get(url);
                return result
        }

    public deleteUser(id) {
    let url = APIQueryConstructor.buildPOSTQuery("users/delete/"+id);
    console.log(url);
            let result = this.http.get(url);
            return result
    }

    public deleteAgent(id) {
        let url = APIQueryConstructor.buildPOSTQuery("agents/delete/:id");
                let result = this.http.get(url);
                return result
        }

    public updateCommercant(id,prenom,nom,revenu, imgsrc, ville, code_postal, secteur) {
        let url = APIQueryConstructor.buildPOSTQuery("commercants/update");
        let parameters = { "id": id, "prenom": prenom, "nom": nom, "revenu": revenu, "imgsrc": imgsrc, "ville": ville, "code_postal": code_postal, "secteur": secteur};
        let result = this.http.post(url,parameters);
        return result
    }





    public login(email, password, profile) {

        let parameters = { "email": email, "password" : password, "profile": profile};
        let user = this.getRessources("users", parameters);
        console.log(user);
        return user;

    }
    public resetPassword(index) {
        let url = APIQueryConstructor.buildPOSTQuery("users/resetPassword");
        let parameters = { "id": index, "password": "NewStrongPassword123!" };
         let result = this.http.post(url, parameters );
                return result;
    }

    public register(username, password) {
        let url = APIQueryConstructor.buildPOSTQuery("auth/register");
        let parameters = { "username": username, "password": password };
        let result = this.http.post(url, parameters );
        return result;
    }

    public logout(username) {
        let url = APIQueryConstructor.buildPOSTQuery("auth/logout");
        let parameters = { "username": username };
        let result = this.http.post(url, parameters);
        return result;
    }

    private getRessources(ressourceName, parameters) {
        let url = APIQueryConstructor.buildGETQuery(ressourceName, parameters);
        console.log(url);
        return this.http.get(url, { headers: this.headers });
    }
}

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
