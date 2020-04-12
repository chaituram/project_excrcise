import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router';

import { ContactListService } from '../../services/conatct-list.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  contactListForm: FormGroup;
  submitted = false;
  title = 'Create New Contact';
  actionName = 'Save';

  constructor(private formBuilder: FormBuilder, private contactListService: ContactListService, private router: Router) { }

  // @ts-ignore
  ngOnInit() {
    this.contactListForm = this.formBuilder.group({
      first_name: [null, [Validators.required]],
          last_name: [null, [Validators.required]],
          email: [null, [Validators.required, Validators.email]],
          phone_number: [null, [Validators.required, Validators.pattern(this.mobnumPattern)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactListForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactListForm.invalid) {
      return;
    } else {
      this.contactListService.createNewContact(this.contactListForm.value);
      this.router.navigate(['/']);
    }
  }
}
