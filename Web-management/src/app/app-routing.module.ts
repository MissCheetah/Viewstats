import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { ManagerViewComponent } from "./manager-view/manager-view.component";
import { PortailComponent} from "./portail/portail.component";
import { AdminComponent} from "./admin/admin.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { UsersComponent } from "./users/users.component";
import { StatsComponent } from "./stats/stats.component";
import {AgentsComponent} from "./agents/agents.component";
import { SettingComponent } from "./setting/setting.component";
import {ModifyCardComponent} from "./modify-card/modify-card.component";

const routes: Routes = [
    { path: '', redirectTo: '/portail', pathMatch: 'full' },
    { path: 'Viewstats', redirectTo: '/Viewstats/commercants', pathMatch: 'full' },
    { path: 'Viewstats/commercants', component: ManagerViewComponent },
    { path: 'portail', component: PortailComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/users', component: UsersComponent },
    { path: 'admin/add', component: ModifyCardComponent},
    { path: 'Viewstats/Stats', component: StatsComponent },
    { path: 'Viewstats/agents', component: AgentsComponent },
    { path: 'Viewstats/Setting', component: SettingComponent },
    { path : 'connexion', component: ConnexionComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }