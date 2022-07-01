import { Component, Input } from '@angular/core';

@Component({
  selector: 'digest',
  templateUrl: './digest.component.html',
  styleUrls: ['./digest.component.scss']
})
export class DigestComponent {
  @Input() title!: string;
}
