import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Cleopatra } from '../../models/cleopatra.model';
import { EnemyLeader } from '../../models/enemy-leader.model';
import { BasicCard, CardSelectionState } from '../basic-card';

@Component({
  selector: 'app-enemy-leader',
  templateUrl: './enemy-leader.component.html',
  styleUrls: ['./enemy-leader.component.scss'],
})
export class EnemyLeaderComponent extends BasicCard implements OnChanges {
  @Input() enemyLeader: EnemyLeader | Cleopatra;
  @Input() selectable: boolean;
  @Output() selectionToggled = new EventEmitter<CardSelectionState>();
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectable?.currentValue) {
      if (!this.selectable) this.isSelected = false;
    }
  }
}
