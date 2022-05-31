import { Age } from "./age.model";
import { FactionCard } from "./faction-card.model";

export class Concession extends FactionCard {

    constructor(
        id: number,
        name: string,
        public readonly talentsPerTurn: number,
        public readonly specialTexts: string[],
    ) {
        super(id, name, Age.EARLY_REPUBLIC);
    }

    public static Build(data: any): Concession {
        return new Concession(
            data.id,
            data.name,
            data.talentsPerTurn,
            data.specialTexts
        );
    }
}