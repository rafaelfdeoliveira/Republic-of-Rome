import { Age } from "./age.model";
import { ForumCard } from "./forum-card.model";

export class EnemyLeader extends ForumCard {

    constructor(
        id: number,
        name: string,
        age: Age,
        public readonly matchingWarsCommonName: string,
        public readonly strength: number,
        public readonly disaster: number,
        public readonly standoff: number,
        public readonly timePeriod: string,
        public readonly specialTexts: string[] = []
    ) {
        super(id, name, age);
    }

    public static Build(data: any): EnemyLeader {
        return new EnemyLeader(
            data.id,
            data.name,
            data.age,
            data.matchingWarsCommonName,
            data.strength,
            data.disaster,
            data.standoff,
            data.timePeriod,
            data.specialTexts
        );
    }

    public get strengthenedWarsText(): string {
        return this.matchingWarsCommonName.endsWith('s')
            ? `Increase Strength of all ${this.matchingWarsCommonName}.`
            : `Increase Strength of ${this.matchingWarsCommonName}.`;
    }
}