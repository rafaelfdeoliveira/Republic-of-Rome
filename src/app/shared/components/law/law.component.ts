import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Law } from '../../models/law.model';
import { BasicCard, CardSelectionState } from '../basic-card';

@Component({
  selector: 'app-law',
  templateUrl: './law.component.html',
  styleUrls: ['./law.component.scss'],
})
export class LawComponent extends BasicCard {
  @Input() law: Law;
  @Input() selectable: boolean;
  @Output() selectionToggled = new EventEmitter<CardSelectionState>();
}
