import { shuffle } from "lodash";
import { CharityGuideline } from "./charity-guideline.model";
import { Concession } from "./concession.model";
import { ConservativesPlayer } from "./conservatives-player.model";
import { FactionCard } from "./faction-card.model";
import { ImperialsPlayer } from "./imperials-player.model";
import { Player } from "./player.model";
import { PlutocratsPlayer } from './plutocrats-player.model';
import { PopulistsPlayer } from "./populists-player.model";
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

    public static Build(data: any): NeutralPlayer {
        let neutralPlayer: NeutralPlayer;
        switch(data.name) {
            case 'Conservatives':
                neutralPlayer = new ConservativesPlayer();
                break;
            case 'Imperials':
                neutralPlayer = new ImperialsPlayer();
                break;
            case 'Plutocrats':
                neutralPlayer = new PlutocratsPlayer();
                break;
            case 'Populists':
                neutralPlayer = new PopulistsPlayer();
                break;
            default:
                throw new Error('Invalid Neutral Player name');
        }

        neutralPlayer.handCards = data.handCards.map((cardData) => FactionCard.Build(cardData));
        neutralPlayer.senators = data.senators.map((senatorData) => SenatorSet.Build(senatorData));
        neutralPlayer.factionDominance = data.factionDominance;
        neutralPlayer.factionTreasury = data._factionTreasury;

        return neutralPlayer;
    }

    public playConcession(concession: Concession) {
        if (!this.senators.length) return;
        
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