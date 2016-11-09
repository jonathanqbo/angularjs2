import './rxjs-extensions';

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent}   from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {HeroSearchComponent} from './hero-search.component';

import {KeyupDemoComponent} from './demo-keyup.component';
import {HeroFormComponent} from './hero-form.component';
import {DashboardComponent2} from './dashboard2.component';
import {HeroDetailModelComponent} from './hero-detail-model.component';

import {AppRoutingModule} from './app-routing.module';

import {HighlightDirective} from './directive/highlight.directive';
import {AwesomePipe} from './pipe/awesome.pipe';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        KeyupDemoComponent,
        HeroFormComponent,
        DashboardComponent2,
        HeroDetailModelComponent,

        HighlightDirective,
        AwesomePipe
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
