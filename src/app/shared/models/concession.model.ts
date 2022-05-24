import { Age } from "./age.model";
import { FactionCard } from "./faction-card.model";

export class Concenssion extends FactionCard {

    constructor(
        id: number,
        name: string,
        public readonly talentsPerTurn: number,
        public readonly texts: string[],
    ) {
        super(id, name, Age.EARLY_REPUBLIC);
    }
}