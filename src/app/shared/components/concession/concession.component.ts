import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Concession } from '../../models/concession.model';
import { BasicCard, CardSelectionState } from '../basic-card';

@Component({
  selector: 'app-concession',
  templateUrl: './concession.component.html',
  styleUrls: ['./concession.component.scss'],
})
export class ConcessionComponent extends BasicCard {
  @Input() concession: Concession;
  @Input() selectable: boolean;
  @Output() selectionToggled = new EventEmitter<CardSelectionState>();
}
