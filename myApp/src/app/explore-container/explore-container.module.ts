import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpModule } from '@angular/http';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import {ApiService} from '../api.service';
import { ExploreContainerComponent } from './explore-container.component';
import { ProfileComponent } from '../profile/profile.component';
import { AddCommercantComponent} from '../add-commercant/add-commercant.component';
import { ListCommercantsComponent} from '../list-commercants/list-commercants.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, HttpModule, HttpClientModule],
 declarations: [ExploreContainerComponent, ProfileComponent, AddCommercantComponent, ListCommercantsComponent],
exports: [ExploreContainerComponent],
    providers : [ApiService]
})
export class ExploreContainerComponentModule {}
