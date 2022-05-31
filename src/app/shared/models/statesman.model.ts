import { getPositiveValue } from "../utilities/common.utility";
import { Age } from "./age.model";
import { FactionCard } from "./faction-card.model";
import { Gracchus } from './gracchus.model';

export class Statesman extends FactionCard {

    private _influence: number = this.baseInfluence;
    private _knights: number = 0;
    private _talents: number = 0;

    constructor(
        id: number,
        name: string,
        age: Age,
        public readonly familyId: number,
        public readonly familyStatesmanId: number,
        public readonly military: number,
        public readonly oratory: number,
        private readonly loyalty: number,
        private readonly baseInfluence: number,
        public readonly texts: string[],
        private _popularity: number = 0,
        public readonly loyaltySubtitle: string = '',
        public readonly opposingStatesmenCombinedIds: string[] = []
    ) {
        super(id, name, age);
    }

    public static Build(data: any): Statesman {
        let statesman: Statesman;
        if (data.familyId === 25) {
            statesman = new Gracchus(
                data.id,
                data.name,
                data.familyStatesmanId,
                data.oratory,
                data.baseInfluence,
                data._popularity,
                data.texts,
                data.loyaltySubtitle
            )
        } else {
            statesman = new Statesman(
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
                data._popularity,
                data.loyaltySubtitle,
                data.opposingStatesmenCombinedIds
            )
        }

        statesman.influence = data._influence;
        statesman.knights = data._knights;
        statesman.talents = data._talents;

        return statesman;
    }

    public set influence(newInfluence: number) {
        this._influence = getPositiveValue(newInfluence);
    }

    public get influence() {
        return this._influence;
    }

    public resetInfluence() {
        this._influence = this.baseInfluence;
    }

    public set knights(newKnights: number) {
        this._knights = getPositiveValue(newKnights);
    }

    public get knights() {
        return this._knights;
    }

    public set talents(newTalents: number) {
        this._talents = getPositiveValue(newTalents);
    }

    public get talents() {
        return this._talents;
    }

    public set popularity(newPopularity: number) {
        if (newPopularity >= 9) {
            this._popularity = 9;
            return;
        }
        
        if (newPopularity <= -9) {
            this._popularity = -9;
            return;
        }

        this._popularity = newPopularity;
    }

    public get popularity(): number {
        return this._popularity;
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