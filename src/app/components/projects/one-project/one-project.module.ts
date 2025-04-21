import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneProjectComponent } from './one-project.component';
import { OneProjectRoutingModule } from './one-project-routing.module';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { StyleClassModule } from 'primeng/styleclass';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    OneProjectComponent
  ],
  imports: [
    CommonModule,
    StyleClassModule,
    OneProjectRoutingModule,
    ToastModule,
    DropdownModule,
    FormsModule,
    ButtonModule
  ],
  providers: [
    AlertService,
    MessageService,
    ConfirmationService
  ],
})
export class OneProjectModule { }
