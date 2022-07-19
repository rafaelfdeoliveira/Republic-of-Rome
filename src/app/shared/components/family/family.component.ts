import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Family } from '../../models/family.model';
import { BasicCard, CardSelectionState } from '../basic-card';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent extends BasicCard {
  @Input() family: Family;
  @Input() selectable: boolean;
  @Input() popularity: number;
  @Input() influence: number;
  @Input() knights: number;
  @Output() selectionToggled = new EventEmitter<CardSelectionState>();
}
