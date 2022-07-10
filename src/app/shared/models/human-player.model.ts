import { buildFactionCard, buildSenatorSet } from "../utilities/class-factories.utility";
import { Player } from "./player.model";

export class HumanPlayer extends Player {
    
    constructor(name: string) {
        super(name);
    }

    public static Build(data: any): HumanPlayer {
        const humanPlayer = new HumanPlayer(data.name);
        humanPlayer.handCards = data.handCards.map((cardData) => buildFactionCard(cardData));
        humanPlayer.senators = data.senators.map((senatorData) => buildSenatorSet(senatorData));
        humanPlayer.factionDominance = data.factionDominance;
        humanPlayer.factionTreasury = data._factionTreasury;
        return humanPlayer;
    }
}