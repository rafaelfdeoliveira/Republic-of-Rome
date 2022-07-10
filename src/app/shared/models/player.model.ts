import { getPositiveValue } from "../utilities/common.utility";
import { FactionCard } from "./faction-card.model";
import { SenatorSet } from "./senator-set.model";
import { Statesman } from "./statesman.model";

export abstract class Player {
    public handCards: FactionCard[] = [];
    public senators: SenatorSet[] = [];
    public factionDominance: 1 | 2 | 3 | 4 | 5;
    private _factionTreasury: number = 0;

    constructor(
        public readonly name: string
    ) {}

    public set factionTreasury(newTreasuy: number) {
        this._factionTreasury = getPositiveValue(newTreasuy);
    }

    public get factionTreasury(): number {
        return this._factionTreasury;
    }

    public get votes(): number {
        return this.senators.reduce((acc, senatorSet) => {
            return acc + senatorSet.votes;
        }, 0);
    }

    public setFactionLeader(familyId: number) {
        this.senators.forEach((senatorSet) => {
            if (senatorSet.familyId === familyId) {
                senatorSet.isFactionLeader = true;
                return;
            }
            senatorSet.isFactionLeader = false;
        });
    }

    public get factionLeader(): SenatorSet {
        return this.senators.find((senatorSet) => senatorSet.isFactionLeader === true);
    }

    public get mostInfluentialSenator(): SenatorSet {
        if (!this.senators.length) return null;
        return this.senators.reduce((acc, senator) => senator.influence > acc.influence ? senator : acc);
    }

    public hasFamilyId(familyId: number): boolean {
        return this.senators.some((senatorSet) => senatorSet.familyId === familyId);
    }

    public hasStatesmanInFamilyIdSet(familyId: number): boolean {
        return this.senators.some((senatorSet) => senatorSet.familyId === familyId && senatorSet.statesman);
    }

    public playStatesman(statesman: Statesman) {
        this.removeCardFromHand(statesman);
        const statesmanSenatorSet = this.senators.find((senatorSet) => senatorSet.familyId === statesman.familyId);
        if (statesmanSenatorSet) {
            statesmanSenatorSet.statesman = statesman;
            return;
        }
        this.senators.push(new SenatorSet(statesman));
    }

    protected removeCardFromHand(factionCard: FactionCard) {
        this.handCards = this.handCards.filter((card) => card.id !== factionCard.id);
    }
}