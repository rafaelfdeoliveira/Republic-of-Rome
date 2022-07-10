import { Component, Input } from '@angular/core';
import { Age } from '../../models/age.model';
import { Statesman } from '../../models/statesman.model';
import { BasicCard } from '../basic-card';

@Component({
  selector: 'app-statesman',
  templateUrl: './statesman.component.html',
  styleUrls: ['./statesman.component.scss'],
})
export class StatesmanComponent extends BasicCard {
  @Input() statesman: Statesman;
}
