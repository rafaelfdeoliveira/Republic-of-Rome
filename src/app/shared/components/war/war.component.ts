import { Component, EventEmitter, Input, Output } from '@angular/core';
import { War } from '../../models/war.model';
import { BasicCard, CardSelectionState } from '../basic-card';

@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.scss'],
})
export class WarComponent extends BasicCard {
  @Input() war: War;
  @Input() selectable: boolean;
  @Input() totalMatchingWars: number = 1;
  @Input() leaderStrength: number = 0;
  @Output() selectionToggled = new EventEmitter<CardSelectionState>();

  public get currentLandStrength(): number {
    return this.war.landStrength * this.totalMatchingWars + this.leaderStrength;
  }

  public get currentFleetStrength(): number {
    if (this.war.navalVictory || !this.war.fleetStrength) return 0;
    return this.war.fleetStrength * this.totalMatchingWars + this.leaderStrength;
  }

  public get inactiveWarText(): string {
    if ([120, 121].includes(this.war.id)) {
      return 'Inactive until Rome attacks.';
    }
    return 'Inactive until attacked or matched.';
  }

  public get revoltedProvincesText(): string {
    if (!this.war.startAsRevolt) {
      return `Revolt if ${this.war.revoltedProvincesText} is a Province.`;
    }
    if (this.war.revoltedProvinces.length > 1) {
      return `If ${this.war.revoltedProvincesText} are not yet Provinces, treat as Inactive until the Revolution Phase that they are.`;
    }
    return `If ${this.war.revoltedProvincesText} is not yet a Province, treat as Inactive until the Revolution Phase in which it is.`;
  }

  public get createdProvincesText(): string {
    if (this.war.matchingWarsCommonName === 'Illyrian Wars') {
      return 'Creates Province of Illyricum if BOTH Illyrian Wars are defeated.';
    }
    return `Victory creates Province${this.war.createdProvinces.length > 1 ? 's' : ''} of ${this.war.createdProvincesText}.`;
  }
}