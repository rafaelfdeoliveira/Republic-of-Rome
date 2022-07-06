import { Age } from "./age.model";
import { FactionCard } from "./faction-card.model";
import { Gracchus } from './gracchus.model';

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

    public static Build(data: any): Statesman {
        if (data.familyId === 25) {
            return new Gracchus(
                data.id,
                data.name,
                data.familyStatesmanId,
                data.oratory,
                data.baseInfluence,
                data.basePopularity,
                data.texts,
                data.loyaltySubtitle
            );
        }

        return new Statesman(
            data.id,
            data.name,
            data.age,
            data.familyId,
            data.familyStatesmanId,
            data.military,
            data.oratory,
            data.loyalty,
            data.baseInfluence,
            data.texts,
            data.basePopularity,
            data.loyaltySubtitle,
            data.opposingStatesmenCombinedIds
        );
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