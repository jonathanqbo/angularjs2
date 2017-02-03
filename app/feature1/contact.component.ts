/**
 * Created by qibo on 11/9/16.
 */

import { Component, OnInit } from '@angular/core';

import { Contact, ContactService} from './contact.service';

@Component({
    moduleId: module.id,
    selector: 'contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})

export class ContactComponent implements OnInit {

    contact: Contact;
    contacts: Contact[];

    msg: string;

    constructor (private contactService: ContactService) {
        this.contact = new Contact(0, 'name0');
    }

    ngOnInit(){
        this.contactService.getContacts().then(contacts => {
            this.contacts = contacts;
            this.contact = contacts[0];
            console.log("*******");
            console.log(JSON.stringify(this.contacts));
            console.log("*******");
            console.log(JSON.stringify(this.contact));
        })
    }

    next() {
        console.log("$$$$");
        console.log(JSON.stringify(this.contact));
        let ix = 1 + this.contacts.indexOf(this.contact);
        if(ix >= this.contacts.length) {
            ix = 0;
        }

        this.contact = this.contacts[ix];
    }

    newContact() {
        this.contact = {id: 0, name: ''};
        this.contacts.push(this.contact);
    }

    onSubmit() {

    }

    displayMsg(msg: string) {
        this.msg = msg;
        setTimeout( () => this.msg = '', 1500);
    }
}