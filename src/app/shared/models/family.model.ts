import { Age } from "./age.model";
import { ForumCard } from "./forum-card.model";

export class Family extends ForumCard {

    constructor(
        id: number,
        name: string,
        age: Age,
        public readonly familyId: number,
        public readonly military: number,
        public readonly oratory: number,
        public readonly loyalty: number,
        public readonly baseInfluence: number,
        public readonly MatchingStatesmanExists: boolean = false
    ) {
        super(id, name, age);
    }

    public static Build(data: any): Family {
        return new Family(
            data.id,
            data.name,
            data.age,
            data.familyId,
            data.military,
            data.oratory,
            data.loyalty,
            data.baseInfluence,
            data.MatchingStatesmanExists
        )
    }
}