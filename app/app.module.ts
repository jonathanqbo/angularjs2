import './rxjs-extensions';

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './heroes/service/in-memory-data.service';

import {AppComponent}   from './app.component';

import {KeyupDemoComponent} from './input/demo-keyup.component';
import {HeroFormComponent} from './form/hero-form.component';
import {DashboardComponent2} from './modal-dashboard/dashboard2.component';
import {HeroDetailModelComponent} from './modal-dashboard/hero-detail-model.component';

import {AppRoutingModule} from './app-routing.module';

import {ContactModule} from './feature1/contact.module';

import {SharedModule} from "./shared/shared.module";

import { CoreModule } from './core/core.module';

import { HerosModule } from './heroes/heroes.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        ContactModule,
        SharedModule,
        CoreModule,
        HerosModule
    ],
    declarations: [
        AppComponent,
        KeyupDemoComponent,
        HeroFormComponent,
        DashboardComponent2,
        HeroDetailModelComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
