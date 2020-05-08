import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {CardComponent} from './card/card.component';
import {CardService} from "./card/card.service";
import {FooterService} from "./footer/footer.service";
import {ApiService} from "./api.service";
import {CommercantsByAgentCardService} from "./commercants-by-agent-card/commercants-by-agent-card.service";
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ModifyCardComponent } from './modify-card/modify-card.component';
import { AdminComponent } from './admin/admin.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PortailComponent } from './portail/portail.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import {ConnexionService} from "./connexion/connexion.service";
import { StatsComponent } from './stats/stats.component';
import { UsersComponent } from './users/users.component';
import { AgentsComponent } from './agents/agents.component';
import { SettingComponent } from './setting/setting.component';
import { CommercantsByAgentCardComponent } from './commercants-by-agent-card/commercants-by-agent-card.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent,
        FooterComponent,
        CardComponent,
        ModifyCardComponent,
        AdminComponent,
        ConnexionComponent,
        PortailComponent,
        ManagerViewComponent,
        StatsComponent,
        UsersComponent,
        AgentsComponent,
        SettingComponent,
        CommercantsByAgentCardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,

    ],
    providers: [CardService, FooterService, ApiService, ConnexionService, CommercantsByAgentCardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
