import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Cleopatra } from '../../models/cleopatra.model';
import { Concession } from '../../models/concession.model';
import { FactionCard } from '../../models/faction-card.model';
import { IntrigueCard } from '../../models/intrigue-card.model';
import { Law } from '../../models/law.model';
import { Statesman } from '../../models/statesman.model';
import { CardSelectionState } from '../basic-card';
import { Age } from '../../models/age.model';

@Component({
  selector: 'app-faction-card',
  templateUrl: './faction-card.component.html',
})
export class FactionCardComponent implements OnChanges {
  @Input() factionCard: FactionCard;
  @Input() selectable: boolean;
  @Output() selectionToggled = new EventEmitter<CardSelectionState>();

  public cardType: 'statesman' | 'intrigue' | 'concession' | 'law' | 'cleopatra';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.factionCard?.currentValue) {
      if (this.factionCard instanceof Statesman) return this.cardType = 'statesman';
      if (this.factionCard instanceof IntrigueCard) return this.cardType = 'intrigue';
      if (this.factionCard instanceof Concession) return this.cardType = 'concession';
      if (this.factionCard instanceof Law) return this.cardType = 'law';
      if (this.factionCard instanceof Cleopatra) return this.cardType = 'cleopatra';
    }
  }

  public get statesman(): Statesman {
    return this.factionCard as Statesman;
  }

  public get intrigueCard(): IntrigueCard {
    return this.factionCard as IntrigueCard;
  }

  public get concession(): Concession {
    return this.factionCard as Concession;
  }

  public get law(): Law {
    return this.factionCard as Law;
  }

  public get cleopatra(): Cleopatra {
    return this.factionCard as Cleopatra;
  }

  public changeSelectionState(cardSelectionState: CardSelectionState) {
    this.selectionToggled.emit(cardSelectionState);
  }
}