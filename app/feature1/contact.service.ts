/**
 * Created by qibo on 11/9/16.
 */

import { Injectable } from '@angular/core';

export class Contact {
    constructor(public id: number, public name: string) {}
}

const CONTACTS: Contact[] = [
    new Contact(1, 'name1'),
    new Contact(2, 'name2'),
    new Contact(3, 'name3'),
    new Contact(4, 'name4'),
    new Contact(5, 'name5'),
    new Contact(6, 'name6'),
    new Contact(7, 'name7'),
    new Contact(8, 'name8')
]

@Injectable()
export class ContactService {

    getContacts() {
        return new Promise<Contact[]>(resolve =>{
            setTimeout(() => resolve(CONTACTS), 500);
        });
    }

    getContact(id: number | string) {
        return this.getContacts().then(contacts => contacts.find(contact =>contact.id === id));
    }

}