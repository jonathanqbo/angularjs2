/**
 * Created by qibo on 11/9/16.
 */

import { NgModule } from '@angular/core';

import { ContactComponent} from './contact.component';
import { ContactService } from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';

import { Link1Component } from './link1.component';
import { Link2Component } from './link2.component';
import { Link3Component } from './link3.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    // Here import SharedModule, so common pipe/directive/modules(CommonModule/FormsModule) can be used without import here
    imports: [ContactRoutingModule, SharedModule],
    declarations: [ContactComponent, Link1Component, Link2Component, Link3Component],
    exports: [ContactComponent],
    providers: [ContactService]
})

export class ContactModule {

}