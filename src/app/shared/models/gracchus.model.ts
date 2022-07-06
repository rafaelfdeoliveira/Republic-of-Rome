import { Age } from "./age.model";
import { Statesman } from "./statesman.model";

export class Gracchus extends Statesman {

    constructor(
        id: number,
        name: string,
        familyStatesmanId: number,
        oratory: number,
        baseInfluence: number,
        basePopularity: number,
        texts: string[],
        loyaltySubtitle: string
    ) {
        super(id, name, Age.MIDDLE_REPUBLIC, 25, familyStatesmanId, 1, oratory, 6, baseInfluence, texts, basePopularity, loyaltySubtitle);
    }

    public getLoyalty(statesmenInPersuasingFaction: Statesman[]): number {
        if (statesmenInPersuasingFaction.some(({familyId}) => familyId === 25)) return 0;
        return 6;
    }
}