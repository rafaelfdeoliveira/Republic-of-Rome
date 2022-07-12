import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Concession } from '../../models/concession.model';
import { BasicCard, CardSelectionState } from '../basic-card';

@Component({
  selector: 'app-concession',
  templateUrl: './concession.component.html',
  styleUrls: ['./concession.component.scss'],
})
export class ConcessionComponent extends BasicCard implements OnChanges {
  @Input() concession: Concession;
  @Input() selectable: boolean;
  @Output() selectionToggled = new EventEmitter<CardSelectionState>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectable?.currentValue) {
      if (!this.selectable) this.isSelected = false;
    }
  }
}
