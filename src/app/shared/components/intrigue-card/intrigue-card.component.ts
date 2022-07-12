import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Assassin } from '../../models/assassin.model';
import { IntrigueCard } from '../../models/intrigue-card.model';
import { BasicCard, CardSelectionState } from '../basic-card';

@Component({
  selector: 'app-intrigue-card',
  templateUrl: './intrigue-card.component.html',
  styleUrls: ['./intrigue-card.component.scss'],
})
export class IntrigueCardComponent extends BasicCard implements OnChanges {
  @Input() intrigueCard: IntrigueCard;
  @Input() selectable: boolean;
  @Output() selectionToggled = new EventEmitter<CardSelectionState>();

  public isAssassin: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.intrigueCard?.currentValue) {
      this.isAssassin = this.intrigueCard instanceof Assassin;
    }
    if (changes.selectable?.currentValue) {
      if (!this.selectable) this.isSelected = false;
    }
  }

}