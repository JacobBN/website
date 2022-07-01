import { Component } from '@angular/core';
import { faProjectDiagram, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faProjectDiagram = faProjectDiagram;
  faUserCircle = faUserCircle;
}
