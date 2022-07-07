import { Statesman } from "./statesman.model";
import { Gracchus } from "./gracchus.model";
import { FactionCard } from "./faction-card.model";
import { Concession } from "./concession.model";
import { Law } from "./law.model";
import { Cleopatra } from "./cleopatra.model";
import { IntrigueCard } from "./intrigue-card.model";
import { Assassin } from "./assassin.model";
import { Blackmail } from "./blackmail.model";
import { Graft } from "./graft.model";
import { InfluencePeddling } from "./influence-peddling.model";
import { MobIncitedToViolence } from "./mob-incited-to-violence.model";
import { MurderOfATribune } from "./murder-of-a-tribune.model";
import { OpenBodyguard } from "./open-bodyguard.model";
import { Proscription } from "./proscription.model";
import { SecretBodyguard } from "./secret-bodyguard.model";
import { Seduction } from "./seduction.model";
import { Tribune } from "./tribune.model";
import { Card } from "./card.model";
import { ForumCard } from "./forum-card.model";
import { Bequest } from "./bequest.model";
import { EnemyLeader } from "./enemy-leader.model";
import { EraEnds } from "./era-ends.model";
import { Family } from "./family.model";
import { War } from "./war.model";
import { ConservativesPlayer } from "./conservatives-player.model";
import { ImperialsPlayer } from "./imperials-player.model";
import { NeutralPlayer } from "./neutral-player.model";
import { PlutocratsPlayer } from "./plutocrats-player.model";
import { PopulistsPlayer } from "./populists-player.model";
import { SenatorSet } from "./senator-set.model";
import { MajorOffice } from "./major-office.model";
import { Province } from "./province.model";

export function buildStatesman(data: any): Statesman {
    if (data.familyId === 25) {
        return new Gracchus(
            data.id,
            data.name,
            data.familyStatesmanId,
            data.oratory,
            data.baseInfluence,
            data.basePopularity,
            data.texts,
            data.loyaltySubtitle
        );
    }

    return new Statesman(
        data.id,
        data.name,
        data.age,
        data.familyId,
        data.familyStatesmanId,
        data.military,
        data.oratory,
        data.loyalty,
        data.baseInfluence,
        data.texts,
        data.basePopularity,
        data.loyaltySubtitle,
        data.opposingStatesmenCombinedIds
    );
}

export function buildIntrigueCard(data: any): IntrigueCard {
    switch(data.name) {
        case 'Assassin':
            return new Assassin(data.id, data.age);
        case 'Blackmail':
            return new Blackmail(data.id, data.age);
        case 'Graft':
            return new Graft(data.id, data.age);
        case 'Influence Peddling':
            return new InfluencePeddling(data.id, data.age);
        case 'Mob Incited to Violence':
            return new MobIncitedToViolence(data.id, data.age);
        case 'Murder of a Tribune':
            return new MurderOfATribune(data.id, data.age);
        case 'Open Bodyguard':
            return new OpenBodyguard(data.id, data.age);
        case 'Proscription':
            return new Proscription(data.id, data.age);
        case 'Secret Bodyguard':
            return new SecretBodyguard(data.id, data.age);
        case 'Seduction':
            return new Seduction(data.id, data.age);
        default:
            return new Tribune(data.id, data.age);
    }
}

export function buildFactionCard(data: any): FactionCard {
    if (data.talentsPerTurn !== undefined) return Concession.Build(data);
    if (data.familyId) return buildStatesman(data);
    if (data.lawTexts) return Law.Build(data);
    if (data.strength) return new Cleopatra();
    return buildIntrigueCard(data);
}

export function buildForumCard(data: any): ForumCard {
    if (data.familyId) return Family.Build(data);
    if (data.landStrength) return War.Build(data);
    if (data.strength) return EnemyLeader.Build(data);
    if (data.id === 65) return new EraEnds();
    return Bequest.Build(data);
}

export function buildCard(data: any): Card {
    if (data.textColor === 'black') {
        return buildForumCard(data);
    }
    return buildFactionCard(data);
}

export function buildSenatorSet(data: any): SenatorSet {
    let senatorSet: SenatorSet;
    if (data.statesman) {
        senatorSet = new SenatorSet(buildStatesman(data.statesman));
        if (data.family) senatorSet.family = Family.Build(data.family);
    } else {
        senatorSet = new SenatorSet(Family.Build(data.family));
    }

    senatorSet.concessions = data.concessions.map((concessionData) => Concession.Build(concessionData));
    senatorSet.provinces = data.provinces.map((provinceData) => Province.Build(provinceData));
    senatorSet.loyalLegionsNumbers = data.loyalLegionsNumbers;
    senatorSet.isFactionLeader = data.isFactionLeader;
    senatorSet.popularity = data._popularity;
    senatorSet.influence = data._influence;
    senatorSet.knights = data._knights;
    senatorSet.talents = data._talents;
    if (data.majorOffice) senatorSet.majorOffice = MajorOffice.Build(data.majorOffice);

    return senatorSet;
}

export function buildNeutralPlayer(data: any): NeutralPlayer {
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

    neutralPlayer.handCards = data.handCards.map((cardData) => buildFactionCard(cardData));
    neutralPlayer.senators = data.senators.map((senatorData) => buildSenatorSet(senatorData));
    neutralPlayer.factionDominance = data.factionDominance;
    neutralPlayer.factionTreasury = data._factionTreasury;

    return neutralPlayer;
}