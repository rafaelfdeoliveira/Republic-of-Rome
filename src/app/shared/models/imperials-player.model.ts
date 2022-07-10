import { CharityGuideline } from "./charity-guideline.model";
import { NeutralPlayer } from "./neutral-player.model";
import { SpoilsGuideline } from "./spoils-guideline.model";
import { buildFactionCard, buildSenatorSet } from "../utilities/class-factories.utility";
import { shuffle } from 'lodash';
import { rollDice } from "../utilities/common.utility";

export class ImperialsPlayer extends NeutralPlayer {

    constructor() {
        super(
            'Imperials',
            1,
            0,
            [CharityGuideline.TREASURY, CharityGuideline.GAMES],
            [
                SpoilsGuideline.FIELD_CONSUL,
                SpoilsGuideline.ROME_CONSUL,
                SpoilsGuideline.GOVERNOR,
                SpoilsGuideline.CENSOR,
                SpoilsGuideline.CONCESSION,
                SpoilsGuideline.LAND_BILL
            ]
        );
    }

    public static Build(data: any): ImperialsPlayer {
        const imperialsPlayer = new ImperialsPlayer();
        imperialsPlayer.handCards = data.handCards.map((cardData) => buildFactionCard(cardData));
        imperialsPlayer.senators = data.senators.map((senatorData) => buildSenatorSet(senatorData));
        imperialsPlayer.factionDominance = data.factionDominance;
        imperialsPlayer.factionTreasury = data._factionTreasury;
        return imperialsPlayer;
    }

    public chooseFactionLeader(): void {
        const greatestMilitaryRating = this.senators.reduce((acc, senatorSet) => {
            if (senatorSet.military > acc) return senatorSet.military;
            return acc;
        }, 0);

        const senatorsWithGreatestMilitaryRating = this.senators.filter((senatorSet) => senatorSet.military === greatestMilitaryRating);
        this.setFactionLeader(shuffle(senatorsWithGreatestMilitaryRating)[0].familyId);
    }

    public divideRevenue(revenue: number): void {
        const roll = rollDice();

        if (roll > revenue) {
            this.factionTreasury += revenue;
            return;
        }

        this.factionTreasury += roll;
        this.factionLeader.talents += revenue - roll;
    }

    public willGraftProvincialSpoils(): boolean {
        return rollDice() >= 4;
    }
}