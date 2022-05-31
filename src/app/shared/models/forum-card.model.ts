import { Age } from "./age.model";
import { Bequest } from "./bequest.model";
import { Card } from "./card.model";
import { EnemyLeader } from "./enemy-leader.model";
import { EraEnds } from "./era-ends.model";
import { Family } from "./family.model";
import { War } from "./war.model";

export abstract class ForumCard extends Card {
    
    constructor(
        id: number,
        name: string,
        age: Age
    ) {
        super(id, name, age, 'black');
    }

    public static Build(data: any): ForumCard {
        if (data.familyId) return Family.Build(data);
        if (data.landStrength) return War.Build(data);
        if (data.strength) return EnemyLeader.Build(data);
        if (data.id === 65) return new EraEnds();
        return Bequest.Build(data);
    }
}