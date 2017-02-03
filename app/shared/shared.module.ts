/**
 * Created by qibo on 11/9/16.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AwesomePipe } from './pipe/awesome.pipe';
import { HighlightDirective } from './directive/highlight.directive';
import { Highlight2Directive } from './directive/highlightv2.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [
        AwesomePipe,
        HighlightDirective,
        Highlight2Directive
    ],
    exports: [
        AwesomePipe,
        HighlightDirective,
        Highlight2Directive,
        // re-export this two module, so they can be used anywhere without re-export.
        CommonModule,
        FormsModule
    ]
})

export class SharedModule {

}