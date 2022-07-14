import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Statesman } from '../../models/statesman.model';
import { BasicCard, CardSelectionState } from '../basic-card';

@Component({
  selector: 'app-statesman',
  templateUrl: './statesman.component.html',
  styleUrls: ['./statesman.component.scss'],
})
export class StatesmanComponent extends BasicCard {
  @Input() statesman: Statesman;
  @Input() selectable: boolean;
  @Input() popularity: number;
  @Input() influence: number;
  @Input() knights: number;
  @Output() selectionToggled = new EventEmitter<CardSelectionState>();
}