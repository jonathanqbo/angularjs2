/**
 * Created by qibo on 11/9/16.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {ContactComponent} from "./contact.component";
import {Link1Component} from "./link1.component";
import {Link2Component} from "./link2.component";
import {Link3Component} from "./link3.component";

const routers = [
    {
        path: 'feature', component: ContactComponent
    },
    {
        path: 'contact/link1', component: Link1Component
    },
    {
        path: 'contact/link2', component: Link2Component
    },
    {
        path: 'contact/link3', component: Link3Component
    }
]

@NgModule({
    imports: [RouterModule.forChild(routers)],
    exports: [RouterModule]
})

export class ContactRoutingModule {

}