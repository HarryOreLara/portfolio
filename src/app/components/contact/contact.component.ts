import { Component } from '@angular/core';
import { CPROJECTS_CONSTANT } from 'src/app/core/constants/CProjects.constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  // features = [
  //   {
  //     title: 'Unlimited Inbox',
  //     image: 'live-collaboration.svg',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   },
  //   {
  //     title: 'Data Security',
  //     image: 'security.svg',
  //     text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   },
  //   {
  //     title: 'Cloud Backup Williams',
  //     image: 'subscribe.svg',
  //     text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  //   },
  // ];

  features = CPROJECTS_CONSTANT
}
