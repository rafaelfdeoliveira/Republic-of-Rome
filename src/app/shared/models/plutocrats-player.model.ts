import { CharityGuideline } from "./charity-guideline.model";
import { NeutralAI } from "./neutral-AI.model";
import { NeutralPlayer } from "./neutral-player.model";
import { SpoilsGuideline } from "./spoils-guideline.model";
import { shuffle } from 'lodash';

export class PlutocratsPlayer extends NeutralPlayer implements NeutralAI {

    constructor() {
        super(
            'Plutocrats',
            2,
            2,
            [CharityGuideline.GAMES],
            [
               SpoilsGuideline.CENSOR,
               SpoilsGuideline.CONCESSION,
               SpoilsGuideline.GOVERNOR,
               SpoilsGuideline.ROME_CONSUL,
               SpoilsGuideline.FIELD_CONSUL
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

    public divideRevenue(revenue: number) {
        const toEachSenator = Math.floor(revenue / this.senators.length);

        this.factionTreasury += revenue - (toEachSenator * this.senators.length);
        this.senators.forEach((senatorSet) => senatorSet.talents += toEachSenator);
    }

    public willGraftProvincialSpoils(): boolean {
        return true;
    }
}