import { CharityGuideline } from "./charity-guideline.model";
import { NeutralPlayer } from "./neutral-player.model";
import { SpoilsGuideline } from "./spoils-guideline.model";
import { buildFactionCard, buildSenatorSet } from "../utilities/class-factories.utility";
import { shuffle } from 'lodash';

export class PlutocratsPlayer extends NeutralPlayer {

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

    public static Build(data: any): PlutocratsPlayer {
        const plutocratsPlayer = new PlutocratsPlayer();
        plutocratsPlayer.handCards = data.handCards.map((cardData) => buildFactionCard(cardData));
        plutocratsPlayer.senators = data.senators.map((senatorData) => buildSenatorSet(senatorData));
        plutocratsPlayer.factionDominance = data.factionDominance;
        plutocratsPlayer.factionTreasury = data._factionTreasury;
        return plutocratsPlayer;
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