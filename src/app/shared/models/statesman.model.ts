import { Age } from "./age.model";
import { FactionCard } from "./faction-card.model";

export class Statesman extends FactionCard {

    constructor(
        id: number,
        name: string,
        age: Age,
        public readonly familyId: number,
        public readonly familyStatesmanId: number,
        public readonly military: number,
        public readonly oratory: number,
        private readonly loyalty: number,
        public readonly baseInfluence: number,
        public readonly texts: string[],
        public readonly basePopularity: number = 0,
        public readonly loyaltySubtitle: string = '',
        public readonly opposingStatesmenCombinedIds: string[] = []
    ) {
        super(id, name, age);
    }

    public getLoyalty(statesmenInFaction: Statesman[]): number {
        if (!this.opposingStatesmenCombinedIds.length) return this.loyalty;
        const hasOpposingStatesmanInFaction = statesmenInFaction.some(({familyId, familyStatesmanId}) => {
            const statesmanCombinedId = `${familyId}-${familyStatesmanId}`;
            return this.opposingStatesmenCombinedIds.some(opposingId => {
                return opposingId === statesmanCombinedId;
            })
        })
        if (hasOpposingStatesmanInFaction) return 0;
        return this.loyalty;
    }
}