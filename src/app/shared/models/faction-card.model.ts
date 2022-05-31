import { Age } from "./age.model";
import { Card } from "./card.model";
import { Cleopatra } from "./cleopatra.model";
import { Concession } from "./concession.model";
import { IntrigueCard } from "./intrigue-card.model";
import { Law } from "./law.model";
import { Statesman } from "./statesman.model";

export abstract class FactionCard extends Card {
    
    constructor(
        id: number,
        name: string,
        age: Age
    ) {
        super(id, name, age, 'red');
    }

    public static Build(data: any): FactionCard {
        if (data.talentsPerTurn !== undefined) return Concession.Build(data);
        if (data.familyId) return Statesman.Build(data);
        if (data.lawTexts) return Law.Build(data);
        if (data.strength) return new Cleopatra();
        return IntrigueCard.Build(data);
    }
}