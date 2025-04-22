import { Component } from '@angular/core';

@Component({
  selector: 'app-section-presentation',
  templateUrl: './section-presentation.component.html',
  styleUrls: ['./section-presentation.component.css']
})
export class SectionPresentationComponent {


  descargarCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv/CV_ORE_LARA.pdf'; 
    link.download = 'Harry_Ore_Lara_CV.pdf'; 
    link.target = '_blank';
    link.click();
  }
  

}
