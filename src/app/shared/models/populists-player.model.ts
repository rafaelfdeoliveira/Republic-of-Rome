import { CharityGuideline } from "./charity-guideline.model";
import { NeutralPlayer } from "./neutral-player.model";
import { SpoilsGuideline } from "./spoils-guideline.model";
import { buildFactionCard, buildSenatorSet } from "../utilities/class-factories.utility";
import { shuffle } from 'lodash';
import { rollDice } from "../utilities/common.utility";

export class PopulistsPlayer extends NeutralPlayer {

    constructor() {
        super(
            'Populists',
            1,
            1,
            [CharityGuideline.GAMES],
            [
                SpoilsGuideline.ROME_CONSUL,
                SpoilsGuideline.FIELD_CONSUL,
                SpoilsGuideline.CENSOR,
                SpoilsGuideline.CONCESSION,
                SpoilsGuideline.LAND_BILL,
                SpoilsGuideline.GOVERNOR
            ]
        );
    }

    public static Build(data: any): PopulistsPlayer {
        const populistsPlayer = new PopulistsPlayer();
        populistsPlayer.handCards = data.handCards.map((cardData) => buildFactionCard(cardData));
        populistsPlayer.senators = data.senators.map((senatorData) => buildSenatorSet(senatorData));
        populistsPlayer.factionDominance = data.factionDominance;
        populistsPlayer.factionTreasury = data._factionTreasury;
        return populistsPlayer;
    }

    public chooseFactionLeader(): void {
        const greatestInfluenceAndPopularityCombined = this.senators.reduce((acc, senatorSet) => {
            if (senatorSet.influence + senatorSet.popularity > acc) {
                return senatorSet.influence + senatorSet.popularity;
            }
            return acc;
        }, -9);

        const senatorsWithGreatestInfluenceAndPopularityCombined = this.senators.filter((senatorSet) => {
            return senatorSet.influence + senatorSet.popularity === greatestInfluenceAndPopularityCombined;
        });

        this.setFactionLeader(shuffle(senatorsWithGreatestInfluenceAndPopularityCombined)[0].familyId);
    }

    public divideRevenue(revenue: number): void {
        let revenueToDistribute = revenue;
        this.senators.forEach((senatorSet) => {
            if (revenueToDistribute === 0) return;
            senatorSet.talents++;
            revenueToDistribute--;
        });
        if (revenueToDistribute > 0) {
            this.factionTreasury++;
            revenueToDistribute--;
            this.factionLeader.talents += revenueToDistribute;
        }
    }

    public willGraftProvincialSpoils(): boolean {
        return rollDice() >= 3;
    }
}