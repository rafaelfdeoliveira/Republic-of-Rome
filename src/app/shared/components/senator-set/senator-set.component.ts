import { Component, Input } from '@angular/core';
import { SenatorSet } from '../../models/senator-set.model';

@Component({
  selector: 'app-senator-set',
  templateUrl: './senator-set.component.html',
  styleUrls: ['./senator-set.component.scss'],
})
export class SenatorSetComponent {
  @Input() senatorSet: SenatorSet;

}
