import { Component, OnInit } from '@angular/core';
import { faArrowUp, faDraftingCompass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {
  faArrowUp = faArrowUp;
  faDraftingCompass = faDraftingCompass;

  constructor() { }
  
  ngOnInit(): void { }
}
