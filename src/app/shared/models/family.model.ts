import { Age } from "./age.model";
import { ForumCard } from "./forum-card.model";

export class Family extends ForumCard {

    private _popularity: number = 0;
    private _influence: number = this.baseInfluence;
    private _knights: number = 0;
    private _talents: number = 0;

    constructor(
        id: number,
        name: string,
        age: Age,
        public readonly FamilyId: number,
        public readonly military: number,
        public readonly oratory: number,
        public readonly loyalty: number,
        private readonly baseInfluence: number,
        public readonly MatchingStatesmanExists: boolean = false
    ) {
        super(id, name, age);
    }

    public set influence(newInfluence: number) {
        if (newInfluence < 0) {
            this._influence = 0;
            return;
        }
        this._influence = newInfluence;
    }

    public get influence() {
        return this._influence;
    }

    public resetInfluence() {
        this._influence = this.baseInfluence;
    }

    public set knights(newKnights: number) {
        if (newKnights < 0) {
            this._knights = 0;
            return;
        }
        this._knights = newKnights;
    }

    public get knights() {
        return this._knights;
    }

    public set talents(newTalents: number) {
        if (newTalents < 0) {
            this._talents = 0;
            return;
        }
        this._talents = newTalents;
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