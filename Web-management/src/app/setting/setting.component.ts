import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  selectedFile: File


  constructor(private api: ApiService) {
    $(document).ready(function(){
      $('[data-toggle="offcanvas"]').click(function(){
          $("#navigation").toggleClass("hidden-xs");
      });
   });
  }
  ngOnInit() {
  }
prenom; nom; email; profile;

imgsrc = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Mommsen_p265.jpg";

  addUser() {
    if( this.profile === "Profile" || this.profile === undefined) {
      alert("Merci de sélectionner un profile");
    }
    else {
      console.log(this.profile);
      let Profile = "Profile";
      Profile = this.profile;
      Profile.toLowerCase();
      this.api.addUser(this.prenom,this.nom, this.email, this.profile).subscribe(
        res1 => {
          console.log("Ok");
        });
    }

  }
   /* this.api.getimgSrc('danielarom.jpg').subscribe(
     res => {
       console.log(res);
       this.imgsrc = res['_body'];
     })

  }



  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile);
  }

  onUpload() {
    this.api.onUpload(this.selectedFile).subscribe(
      res => {
        alert(res['_body']);
      }
    )
  }
  id = 40;
  prenom; nom; revenu; ville; code_postal;secteur;
  addCommercant() {


    this.api.getimgSrc(this.selectedFile.name).subscribe(
      res => {
        //this. id = parseInt(this.api.getNbComm['_body']);


        this.api.addCommercant(this.id, this.prenom,this.nom, this.revenu, res['_body'], this.ville, this.code_postal, this.secteur).subscribe(
          res1 => {
            this.id = this.id +1;
            alert('OK');
          }
        )
      }
    )

  }

*/


}
