import { Component, OnInit } from '@angular/core';

import { ContactListService } from '../../services/conatct-list.service';

import { IContact } from '../../interfaces/contact-list';
import { Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(private contactListService: ContactListService, private router: Router) { }
  records: IContact[];
  ngOnInit() {
    this.contactListService.getRecords().subscribe((res: any) => {
      this.records = res;
    });
  }

  editContact(contact: IContact) {
    this.router.navigate(['/edit', contact.id]);
  }

  deleteContact(id: number) {
    this.contactListService.deleteContact(id);
  }

}
