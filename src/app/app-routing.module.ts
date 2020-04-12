import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './components/contact-list/contact-list.component';
import { CreateContactComponent } from './components/create-contact/create-contact.component';
import {ContactEditComponent} from "./components/contact-edit/contact-edit.component";


const routes: Routes = [
  {
    path: '',
    component: ContactListComponent
  },
   {
    path: 'createContact',
    component: CreateContactComponent
  },
  {
    path: 'edit/:id',
    component: ContactEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
