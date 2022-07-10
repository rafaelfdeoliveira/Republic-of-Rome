import { shuffle } from "lodash";
import { CharityGuideline } from "./charity-guideline.model";
import { Concession } from "./concession.model";
import { Player } from "./player.model";
import { SenatorSet } from "./senator-set.model";
import { SpoilsGuideline } from "./spoils-guideline.model";

export abstract class NeutralPlayer extends Player {

    constructor(
        name: string,
        public readonly knightsGuideline: number,
        public readonly initiativeGuideline: number,
        public readonly charityGuideline: CharityGuideline[],
        public readonly spoilsGuideline: SpoilsGuideline[]
    ) {
        super(name);
    }

    abstract chooseFactionLeader(): void;
    abstract divideRevenue(revenue: number): void;
    abstract willGraftProvincialSpoils(): boolean;

    public playConcession(concession: Concession) {
        if (!this.senators.length) return;
        this.removeCardFromHand(concession);
        const senators = this.senatorsWithLeastConcessionsAndMostInfluence;
        shuffle(senators)[0].concessions.push(concession);
    }

    private get senatorsWithLeastConcessionsAndMostInfluence(): SenatorSet[] {
        if (!this.senators.length) return [];
        const senators = this.senatorsWithLeastConcessions;
        const biggestInfluence = senators.reduce((acc, senator) => {
            return senator.influence > acc ? senator.influence : acc;
        }, 0);
        return senators.filter(senator => senator.influence === biggestInfluence);
    }

    private get senatorsWithLeastConcessions(): SenatorSet[] {
        if (!this.senators.length) return [];
        const smallerNumberOfConcessionsInASenator = this.senators.reduce((acc, senator) => {
            return senator.concessions.length < acc.concessions.length ? senator : acc;
        }).concessions.length;

        return this.senators.filter(senator => senator.concessions.length === smallerNumberOfConcessionsInASenator);
    }
}