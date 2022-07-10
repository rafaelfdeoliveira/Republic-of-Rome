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
        public readonly baseLoyalty: number,
        public readonly baseInfluence: number,
        public readonly texts: string[],
        public readonly basePopularity: number = 0,
        public readonly loyaltySubtitle: string = '',
        public readonly opposingStatesmenCombinedIds: string[] = []
    ) {
        super(id, name, age);
    }

    public get familyStatesmanLetterId(): 'A' | 'B' | 'C' {
        if (this.familyStatesmanId === 1) return 'A';
        if (this.familyStatesmanId === 2) return 'B';
        if (this.familyStatesmanId === 3) return 'C';
    }

    public hasOpposingStatesmen(): boolean {
        return !!this.opposingStatesmenCombinedIds.length;
    }

    public getLoyalty(statesmenInFaction: Statesman[]): number {
        if (!this.hasOpposingStatesmen()) return this.baseLoyalty;
        const hasOpposingStatesmanInFaction = statesmenInFaction.some(({familyId, familyStatesmanId}) => {
            const statesmanCombinedId = `${familyId}-${familyStatesmanId}`;
            return this.opposingStatesmenCombinedIds.some(opposingId => {
                return opposingId === statesmanCombinedId;
            })
        })
        if (hasOpposingStatesmanInFaction) return 0;
        return this.baseLoyalty;
    }
}