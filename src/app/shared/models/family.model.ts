import { getPositiveValue } from "../utilities/common.utility";
import { Age } from "./age.model";
import { ForumCard } from "./forum-card.model";

export class Family extends ForumCard {

    public loyalLegionsNumbers: number[] = [];

    private _popularity: number = 0;
    private _influence: number = this.baseInfluence;
    private _knights: number = 0;
    private _talents: number = 0;

    constructor(
        id: number,
        name: string,
        age: Age,
        public readonly familyId: number,
        public readonly military: number,
        public readonly oratory: number,
        public readonly loyalty: number,
        private readonly baseInfluence: number,
        public readonly MatchingStatesmanExists: boolean = false
    ) {
        super(id, name, age);
    }

    public static Build(data: any): Family {
        const family = new Family(
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
        
        family.loyalLegionsNumbers = data.loyalLegionsNumbers;
        family.popularity = data._popularity;
        family.influence = data._influence;
        family.knights = data._knights;
        family.talents = data._talents;

        return family;
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
}