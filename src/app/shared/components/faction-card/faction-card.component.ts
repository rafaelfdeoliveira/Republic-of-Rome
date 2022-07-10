import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cleopatra } from '../../models/cleopatra.model';
import { Concession } from '../../models/concession.model';
import { FactionCard } from '../../models/faction-card.model';
import { IntrigueCard } from '../../models/intrigue-card.model';
import { Law } from '../../models/law.model';
import { Statesman } from '../../models/statesman.model';

@Component({
  selector: 'app-faction-card',
  templateUrl: './faction-card.component.html',
  styleUrls: ['./faction-card.component.scss'],
})
export class FactionCardComponent implements OnChanges {
  @Input() factionCard: FactionCard;

  public cardType: 'statesman' | 'intrigue' | 'concession' | 'law' | 'cleopatra';

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.factionCard.currentValue) {
      if (this.factionCard instanceof Statesman) return this.cardType = 'statesman';
      if (this.factionCard instanceof IntrigueCard) return this.cardType = 'intrigue';
      if (this.factionCard instanceof Concession) return this.cardType = 'concession';
      if (this.factionCard instanceof Law) return this.cardType = 'law';
      if (this.factionCard instanceof Cleopatra) return this.cardType = 'cleopatra';
    }
  }

  public getStatesman(): Statesman {
    return this.factionCard as Statesman;
  }
}