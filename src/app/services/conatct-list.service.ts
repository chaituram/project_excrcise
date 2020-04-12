import { Injectable, HostListener } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { IContact } from '../interfaces/contact-list';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ContactListService {
contacts: IContact[] = [];
private createContact = new Subject<IContact>();
private counter: number = 1;
private records: BehaviorSubject<IContact[]>;

  constructor() {
    this.contacts.push({first_name: 'Sample',
      last_name: 'sample', email: 'sample@mail.com',
      phone_number: 123456789,
      id: 1});
    this.records = new BehaviorSubject<IContact[]>(this.contacts);
  }

  createNewContact(contact: IContact) {
    contact.id = ++ this.counter;
    this.contacts.push(contact);
    this.records.next(this.contacts);
  }

  getContactById(id: number) {
    return this.contacts.find(c => c.id == id);
  }

  updateContact(contact: IContact) {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    this.contacts[index] = contact;
  }

  deleteContact(id: number) {
    const index = this.contacts.findIndex(c => c.id === id);
    this.contacts.splice(index, 1);
  }

  getRecords(): Observable<any> {
   return this.records.asObservable();
  }
}
