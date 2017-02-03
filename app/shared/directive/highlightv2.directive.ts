/**
 * Created by qibo on 11/10/16.
 */

import {Directive, ElementRef, Renderer, HostListener, Input} from '@angular/core';

@Directive ({
    selector: '[highlightColor]'
})

export class Highlight2Directive {
    private _defaultColor = 'red';

    @Input("highlightColor")
    highlightColor: string;

    @Input("defaultHighlightColor")
    set defaultColor(colorName: string) {
        this._defaultColor = colorName || this._defaultColor;
    }

    constructor(private el: ElementRef, private renderer: Renderer){ }

    @HostListener('mouseenter')
    onMouseEnter(){
        this.highlight(this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.highlight(null);
    }

    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}