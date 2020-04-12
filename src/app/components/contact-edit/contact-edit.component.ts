import { Component, OnInit } from '@angular/core';
import {ContactListService} from '../../services/conatct-list.service';
import {IContact} from '../../interfaces/contact-list';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {switchMap} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './../create-contact/create-contact.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  private contact: IContact;
  contactListForm: FormGroup;
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  title = 'Update Contact';
  actionName = 'Update';
  submitted = false;
  constructor(private formBuilder: FormBuilder, private service: ContactListService, private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(pars => {
      console.log(pars);
      this.contact = this.service.getContactById(+pars['id']);
      this.contactListForm = this.formBuilder.group({
        id: [null, [Validators.required]],
        first_name: [null, [Validators.required]],
        last_name: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        phone_number: [null, [Validators.required, Validators.pattern(this.mobnumPattern)]]
      });
      this.contactListForm.patchValue(this.contact);
    });
  }

  get f() { return this.contactListForm.controls; }

  onSubmit() {
    if (this.contactListForm.invalid) {
      return;
    } else {
      this.service.updateContact(this.contactListForm.value);
      this.location.back();
    }
  }
}
