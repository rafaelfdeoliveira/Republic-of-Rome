import { Statesman } from "../models/statesman.model";
import { Gracchus } from "../models/gracchus.model";
import { FactionCard } from "../models/faction-card.model";
import { Concession } from "../models/concession.model";
import { Law } from "../models/law.model";
import { Cleopatra } from "../models/cleopatra.model";
import { IntrigueCard } from "../models/intrigue-card.model";
import { Assassin } from "../models/assassin.model";
import { Blackmail } from "../models/blackmail.model";
import { Graft } from "../models/graft.model";
import { InfluencePeddling } from "../models/influence-peddling.model";
import { MobIncitedToViolence } from "../models/mob-incited-to-violence.model";
import { MurderOfATribune } from "../models/murder-of-a-tribune.model";
import { OpenBodyguard } from "../models/open-bodyguard.model";
import { Proscription } from "../models/proscription.model";
import { SecretBodyguard } from "../models/secret-bodyguard.model";
import { Seduction } from "../models/seduction.model";
import { Tribune } from "../models/tribune.model";
import { Card } from "../models/card.model";
import { ForumCard } from "../models/forum-card.model";
import { Bequest } from "../models/bequest.model";
import { EnemyLeader } from "../models/enemy-leader.model";
import { EraEnds } from "../models/era-ends.model";
import { Family } from "../models/family.model";
import { War } from "../models/war.model";
import { ConservativesPlayer } from "../models/conservatives-player.model";
import { ImperialsPlayer } from "../models/imperials-player.model";
import { NeutralPlayer } from "../models/neutral-player.model";
import { PlutocratsPlayer } from "../models/plutocrats-player.model";
import { PopulistsPlayer } from "../models/populists-player.model";
import { SenatorSet } from "../models/senator-set.model";
import { MajorOffice } from "../models/major-office.model";
import { Province } from "../models/province.model";

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
        data.baseLoyalty,
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
    switch(data.name) {
        case 'Conservatives':
            return ConservativesPlayer.Build(data);
        case 'Imperials':
            return ImperialsPlayer.Build(data);
        case 'Plutocrats':
            return PlutocratsPlayer.Build(data);
        case 'Populists':
            return PopulistsPlayer.Build(data);
        default:
            throw new Error('Invalid Neutral Player name');
    }
}