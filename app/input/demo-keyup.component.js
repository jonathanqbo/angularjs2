/**
 * Created by qibo on 11/2/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var KeyupDemoComponent = (function () {
    function KeyupDemoComponent() {
        this.value = '';
        this.values = [];
    }
    KeyupDemoComponent.prototype.onKeyup = function (text) {
        console.log(this);
        console.log(this.value);
        this.value += text + " | ";
    };
    KeyupDemoComponent.prototype.onBlur = function (text) {
        this.value += text + " | ";
    };
    KeyupDemoComponent.prototype.addValue = function (value) {
        this.values.push(value);
    };
    KeyupDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'demo-keyup',
            template: "\n        <h1>Give me some keys!</h1>\n        \n        \n        <div>\n            <h2>Using $event</h2>\n            <input (keyup)=\"onKeyup($event.target.value)\" />\n            <p>Keyup: {{value}}</p>\n        </div>\n        <div>\n            <h2>Using template reference variable</h2>\n            <!-- must do [(ngModel)] first, then to set #input1=\"ngModel\", otherwise will get error -->\n            <input (keyup)=\"0\" #input1>\n            <p>{{input1.value}}</p>\n        </div>\n        <div>\n            <h2>Using template reference variable 2</h2>\n            <input #input2 (keyup)=\"onKeyup(input2.value)\" />\n            <p>Keyup: {{value}}</p>\n        </div>\n        \n        <h1>Onblur</h1>\n        <div>\n            <input (blur)=\"onBlur($event.target.value)\" />\n            <p>onBlur: {{value}}</p>\n        </div>\n        \n        <h1>An add by clicking button or clicking outside of input box or clicking enter key</h1>\n        <div>\n            <input #myinput (blur)=\"addValue(myinput.value)\" (keyup.enter)=\"addValue(myinput.value)\" />\n            <button (click)=\"addValue(myinput.value)\">Add</button>\n            <ul>\n                <li *ngFor=\"let oneValue of values\">{{oneValue}}</li>\n            </ul>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], KeyupDemoComponent);
    return KeyupDemoComponent;
}());
exports.KeyupDemoComponent = KeyupDemoComponent;
//# sourceMappingURL=demo-keyup.component.js.map