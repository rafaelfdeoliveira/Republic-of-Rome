import { CharityGuideline } from "./charity-guideline.model";
import { NeutralAI } from "./neutral-AI.model";
import { NeutralPlayer } from "./neutral-player.model";
import { SpoilsGuideline } from "./spoils-guideline.model";
import { shuffle } from 'lodash';
import { rollDice } from "../utilities/common.utility";

export class ImperialsPlayer extends NeutralPlayer implements NeutralAI {

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