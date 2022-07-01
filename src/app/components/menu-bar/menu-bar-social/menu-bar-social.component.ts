import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'menu-bar-social',
  templateUrl: './menu-bar-social.component.html',
  styleUrls: ['./menu-bar-social.component.scss']
})
export class MenuBarSocialComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
