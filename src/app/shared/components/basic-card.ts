import { Card } from "../models/card.model";
import { Age } from "../models/age.model";

export abstract class BasicCard {

    constructor() {}

    public isFromEarlyRepublic(card: Card): boolean {
      return card.age === Age.EARLY_REPUBLIC;
    }
  
    public isFromMiddleRepublic(card: Card): boolean {
      return card.age === Age.MIDDLE_REPUBLIC;
    }
  
    public isFromLateRepublic(card: Card): boolean {
      return card.age === Age.LATE_REPUBLIC;
    }
}