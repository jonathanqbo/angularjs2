/**
 * Created by qibo on 11/9/16.
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
var contact_service_1 = require('./contact.service');
var ContactComponent = (function () {
    function ContactComponent(contactService) {
        this.contactService = contactService;
        this.contact = new contact_service_1.Contact(0, 'name0');
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContacts().then(function (contacts) {
            _this.contacts = contacts;
            _this.contact = contacts[0];
            console.log("*******");
            console.log(JSON.stringify(_this.contacts));
            console.log("*******");
            console.log(JSON.stringify(_this.contact));
        });
    };
    ContactComponent.prototype.next = function () {
        console.log("$$$$");
        console.log(JSON.stringify(this.contact));
        var ix = 1 + this.contacts.indexOf(this.contact);
        if (ix >= this.contacts.length) {
            ix = 0;
        }
        this.contact = this.contacts[ix];
    };
    ContactComponent.prototype.newContact = function () {
        this.contact = { id: 0, name: '' };
        this.contacts.push(this.contact);
    };
    ContactComponent.prototype.onSubmit = function () {
    };
    ContactComponent.prototype.displayMsg = function (msg) {
        var _this = this;
        this.msg = msg;
        setTimeout(function () { return _this.msg = ''; }, 1500);
    };
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contact',
            templateUrl: 'contact.component.html',
            styleUrls: ['contact.component.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map