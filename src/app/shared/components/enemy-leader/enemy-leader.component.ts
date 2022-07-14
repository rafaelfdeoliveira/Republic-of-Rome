import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cleopatra } from '../../models/cleopatra.model';
import { EnemyLeader } from '../../models/enemy-leader.model';
import { BasicCard, CardSelectionState } from '../basic-card';

@Component({
  selector: 'app-enemy-leader',
  templateUrl: './enemy-leader.component.html',
  styleUrls: ['./enemy-leader.component.scss'],
})
export class EnemyLeaderComponent extends BasicCard {
  @Input() enemyLeader: EnemyLeader | Cleopatra;
  @Input() selectable: boolean;
  @Output() selectionToggled = new EventEmitter<CardSelectionState>();
}
