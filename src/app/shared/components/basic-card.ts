import { EventEmitter } from "@angular/core";
import { Card } from "../models/card.model";
import { Age } from "../models/age.model";

export abstract class BasicCard {

    public isSelected: boolean;
    public abstract selectable: boolean;
    public abstract selectionToggled: EventEmitter<CardSelectionState>;

    public isFromEarlyRepublic(card: Card): boolean {
      return card.age === Age.EARLY_REPUBLIC;
    }
  
    public isFromMiddleRepublic(card: Card): boolean {
      return card.age === Age.MIDDLE_REPUBLIC;
    }
  
    public isFromLateRepublic(card: Card): boolean {
      return card.age === Age.LATE_REPUBLIC;
    }

    public changeSelectionState(card: Card) {
      if (!this.selectable && !this.isSelected) return;
      this.isSelected = !this.isSelected;
      this.selectionToggled.emit({card, selected: this.isSelected});
    }
}

export interface CardSelectionState {
  card: Card,
  selected: boolean
}