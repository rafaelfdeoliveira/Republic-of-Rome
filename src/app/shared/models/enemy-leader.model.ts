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
        public readonly timePeriod: string
    ) {
        super(id, name, age);
    }
}