import { CharityGuideline } from "./charity-guideline.model";
import { NeutralAI } from "./neutral-AI.model";
import { NeutralPlayer } from "./neutral-player.model";
import { SpoilsGuideline } from "./spoils-guideline.model";
import { shuffle } from 'lodash';

export class ConservativesPlayer extends NeutralPlayer implements NeutralAI {

    constructor() {
        super(
            'Conservatives',
            0,
            -1,
            [CharityGuideline.TREASURY],
            [
                SpoilsGuideline.ROME_CONSUL,
                SpoilsGuideline.CENSOR,
                SpoilsGuideline.FIELD_CONSUL,
                SpoilsGuideline.GOVERNOR,
                SpoilsGuideline.CONCESSION
            ]
        );
    }

    public chooseFactionLeader(): void {
        const greatestInfluence = this.senators.reduce((acc, senatorSet) => {
            if (senatorSet.influence > acc) return senatorSet.influence;
            return acc;
        }, 0);

        const senatorsWithGreatestInfluence = this.senators.filter((senatorSet) => senatorSet.influence === greatestInfluence);
        this.setFactionLeader(shuffle(senatorsWithGreatestInfluence)[0].familyId);
    }

    public divideRevenue(revenue: number): void {
        const toFactionTreasury = Math.floor(revenue / 2);
        const toFactionLeader = revenue - toFactionTreasury;

        this.factionTreasury += toFactionTreasury;
        this.factionLeader.talents += toFactionLeader;
    }

    public willGraftProvincialSpoils(): boolean {
        return false;
    }
}