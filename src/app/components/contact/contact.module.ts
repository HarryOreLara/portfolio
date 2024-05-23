import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ButtonModule } from 'primeng/button';
import{CheckboxModule} from 'primeng/checkbox'
import {DividerModule} from 'primeng/divider'
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    CheckboxModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    DropdownModule
  ]
})
export class ContactModule { }
