import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WarSet } from '../../models/war-set.model';

@Component({
  selector: 'app-war-set',
  templateUrl: './war-set.component.html',
  styleUrls: ['./war-set.component.scss'],
})
export class WarSetComponent {
  @Input() warSet: WarSet;
  @Input() selectable: boolean;
  @Output() selectionToggled = new EventEmitter<{warSet: WarSet, selected: boolean}>();
}