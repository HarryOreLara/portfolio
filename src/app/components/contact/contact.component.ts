import { Component } from '@angular/core';
import { CPROJECTS_CONSTANT } from 'src/app/core/constants/CProjects.constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  features = CPROJECTS_CONSTANT;

  openGmail() {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=harryorelara@gmail.com", "_blank");
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/harry-ore-lara-/', '_blank');
  }

  openGithub() {
    window.open('https://github.com/harryorelara', '_blank');
  }

  openWhatsapp() {
    window.open('https://wa.me/51906601846', '_blank');
  }
}
