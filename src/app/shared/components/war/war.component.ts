import { Component, Input } from '@angular/core';
import { War } from '../../models/war.model';

@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.scss'],
})
export class WarComponent {
  @Input() war: War;

}
