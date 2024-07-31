import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentRoutingModule } from './managment-routing.module';
import { ManagmentComponent } from './managment.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyleClassModule } from 'primeng/styleclass';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { provideAnimations } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { RatingModule } from 'primeng/rating';
import { ProjectService } from 'src/app/services/project.service';
import { MessageService } from 'primeng/api';
import { AlertService } from 'src/app/shared/services/alert.service';

@NgModule({
  declarations: [
    ManagmentComponent
  ],
  imports: [
    CommonModule,
    ManagmentRoutingModule,
    InputSwitchModule,
    InputTextModule,
    FileUploadModule,
    InputTextareaModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    StyleClassModule,
    RatingModule,
    MultiSelectModule,
    ToastModule,
    ProgressSpinnerModule
    

  ],
  providers:[ProjectService, MessageService, AlertService]
})
export class ManagmentModule { }
