import { Concession } from "./concession.model";
import { Family } from "./family.model";
import { Province } from "./province.model";
import { Statesman } from "./statesman.model";
import { getPositiveValue } from "../utilities/common.utility";
import { MajorOffice } from "./major-office.model";

export class SenatorSet {
    public family: Family = null;
    public concessions: Concession[] = [];
    public provinces: Province[] = [];
    public loyalLegionsNumbers: number[] = [];
    public isFactionLeader: boolean = false;
    public majorOffice: MajorOffice = null;

    private _statesman: Statesman = null;
    private _popularity: number = 0;
    private _influence: number;
    private _knights: number = 0;
    private _talents: number = 0;

    constructor(familyOrStatesman: Family | Statesman) {
        if (familyOrStatesman instanceof Statesman) {
            this.statesman = familyOrStatesman;
            this.influence = this.statesman.baseInfluence;
            this.popularity = this.statesman.basePopularity;
            return;
        }

        this.family = familyOrStatesman;
        this.influence = this.family.baseInfluence;
    }

    public set statesman(newStatesman: Statesman) {
        this._statesman = newStatesman;
        if (this.influence < this.statesman.baseInfluence) {
            this.influence = this.statesman.baseInfluence;
        }
        if (this.popularity < this.statesman.basePopularity) {
            this.popularity = this.statesman.basePopularity;
        }
    }

    public get statesman(): Statesman {
        return this._statesman;
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

    public set influence(newInfluence: number) {
        this._influence = getPositiveValue(newInfluence);
    }

    public get influence() {
        return this._influence;
    }

    public resetInfluence() {
        if (this.statesman) {
            this.influence = this.statesman.baseInfluence;
            return;
        }

        this.influence = this.family.baseInfluence;
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

    public get familyId(): number {
        if (this.statesman) return this.statesman.familyId;
        return this.family.familyId;
    }

    public get military(): number {
        if (this.statesman) return this.statesman.military;
        return this.family.military;
    }

    public get oratory(): number {
        if (this.statesman) return this.statesman.oratory;
        return this.family.oratory;
    }

    public getloyalty(statesmenInFaction: Statesman[]): number {
        if (this.statesman) return this.statesman.getLoyalty(statesmenInFaction);
        return this.family.loyalty;
    }

    public get votes(): number {
        return this.oratory + this.knights;
    }
}