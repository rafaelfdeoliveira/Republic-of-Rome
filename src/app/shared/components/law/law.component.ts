import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Law } from '../../models/law.model';
import { BasicCard, CardSelectionState } from '../basic-card';

@Component({
  selector: 'app-law',
  templateUrl: './law.component.html',
  styleUrls: ['./law.component.scss'],
})
export class LawComponent extends BasicCard implements OnChanges {
  @Input() law: Law;
  @Input() selectable: boolean;
  @Output() selectionToggled = new EventEmitter<CardSelectionState>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectable?.currentValue) {
      if (!this.selectable) this.isSelected = false;
    }
  }
}
