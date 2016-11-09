/**
 * Created by qibo on 11/2/16.
 */

import { Component } from '@angular/core'

@Component ({
    moduleId: module.id,
    selector: 'demo-keyup',
    template: `
        <h1>Give me some keys!</h1>
        
        
        <div>
            <h2>Using $event</h2>
            <input (keyup)="onKeyup($event.target.value)" />
            <p>Keyup: {{value}}</p>
        </div>
        <div>
            <h2>Using template reference variable</h2>
            <!-- must do [(ngModel)] first, then to set #input1="ngModel", otherwise will get error -->
            <input (keyup)="0" #input1>
            <p>{{input1.value}}</p>
        </div>
        <div>
            <h2>Using template reference variable 2</h2>
            <input #input2 (keyup)="onKeyup(input2.value)" />
            <p>Keyup: {{value}}</p>
        </div>
        
        <h1>Onblur</h1>
        <div>
            <input (blur)="onBlur($event.target.value)" />
            <p>onBlur: {{value}}</p>
        </div>
        
        <h1>An add by clicking button or clicking outside of input box or clicking enter key</h1>
        <div>
            <input #myinput (blur)="addValue(myinput.value)" (keyup.enter)="addValue(myinput.value)" />
            <button (click)="addValue(myinput.value)">Add</button>
            <ul>
                <li *ngFor="let oneValue of values">{{oneValue}}</li>
            </ul>
        </div>
    `
})

export class KeyupDemoComponent {
    value = '';
    values = [];

    onKeyup(text: string) {
        console.log(this);
        console.log(this.value);
        this.value += text + " | ";
    }

    onBlur(text: string) {
        this.value += text + " | ";
    }

    addValue(value: string) {
        this.values.push(value);
    }

}