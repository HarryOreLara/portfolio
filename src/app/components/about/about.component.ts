import { Component } from '@angular/core';
import { CEXPERIENCE_CONSTANT } from 'src/app/core/constants/CExperience.constant';
import { IExperience } from 'src/app/core/interfaces/IExperience.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {



  experiencias:IExperience[] = CEXPERIENCE_CONSTANT;

}
