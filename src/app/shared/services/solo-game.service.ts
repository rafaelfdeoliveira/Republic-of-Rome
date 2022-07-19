import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { WarSet } from '../models/war-set.model';
import { War } from '../models/war.model';
import { Law } from '../models/law.model';
import { EnemyLeader } from '../models/enemy-leader.model';
import { Family } from '../models/family.model';
import { Concession } from '../models/concession.model';
import { getFullLegionPool, Legion } from '../models/legion.model';
import { Fleet, getFullFleetPool } from '../models/fleet.model';
import { getLimitedPositiveValue, getPositiveValue } from '../utilities/common.utility';
import { Scenario } from '../models/scenario.model';
import { HumanPlayer } from '../models/human-player.model';
import { ConservativesPlayer } from '../models/conservatives-player.model';
import { ImperialsPlayer } from '../models/imperials-player.model';
import { PlutocratsPlayer } from '../models/plutocrats-player.model';
import { PopulistsPlayer } from '../models/populists-player.model';
import { getEarlyRepublicDeck } from '../models/early-republic-deck.model';
import { getMiddleRepublicDeck } from '../models/middle-republic-deck.model';
import { FactionCard } from '../models/faction-card.model';
import { shuffle } from 'lodash';
import { SenatorSet } from '../models/senator-set.model';
import { getAllMajorOffices, MajorOffice } from '../models/major-office.model';
import { Player } from '../models/player.model';
import { Statesman } from '../models/statesman.model';
import { NeutralPlayer } from '../models/neutral-player.model';
import { EraEnds } from '../models/era-ends.model';
import { Age } from '../models/age.model';
import { GamePhase } from '../models/game-phase.model';

@Injectable({
  providedIn: 'root'
})
export class SoloGameService {

  public name: string;
  public age: Age;
  public phase: GamePhase;
  public humanPlayer: HumanPlayer;
  public conservativesPlayer: ConservativesPlayer;
  public imperialsPlayer: ImperialsPlayer;
  public plutocratsPlayer: PlutocratsPlayer;
  public populistsPlayer: PopulistsPlayer;
  public activePlayer: Player;
  public drawPile: Card[]; // Cards must be picked from the end of the list during game (pop)
  public discardPile: Card[];
  public inactiveWars: War[];
  public imminentWars: War[];
  public unprosecutedWars: WarSet[];
  public activeWars: WarSet[];
  public laws: Law[];
  public availableMajorOffices: MajorOffice[];
  public enemyLeadersInCuria: EnemyLeader[];
  public senatorsInCuria: Family[];
  public destroyedConcessionsInCuria: Concession[];
  public forcePoolLegions: Legion[];
  public forcePoolFleets: Fleet[];
  public availableLegions: Legion[];
  public availableFleets: Fleet[];
  private _stateTreasury: number;
  private _unrestLevel: number;
  private _type1LandBillsNum: number;
  private _type2LandBillsNum: number;
  private _type3LandBillsNum: number;
  private _scenario: Scenario;

  public get availableFreshLegions() {
    return this.availableLegions.filter(legion => !legion.isVeteran);
  }

  public get availableVeteranLegions() {
      return this.availableLegions.filter(legion => legion.isVeteran);
  }

  public get stateTreasury() {
    return this._stateTreasury;
  }

  public set stateTreasury(newStateTreasury: number) {
    this._stateTreasury = getPositiveValue(newStateTreasury);
  }

  public get unrestLevel() {
    return this._unrestLevel;
  }

  public set unrestLevel(newUnrestLevel: number) {
    this._unrestLevel = getPositiveValue(newUnrestLevel);
  }

  public get type1LandBillsNum() {
    return this._type1LandBillsNum;
  }

  public set type1LandBillsNum(proposedValue: number) {
    this._type1LandBillsNum = getLimitedPositiveValue(proposedValue, 1);
  }

  public get type2LandBillsNum() {
    return this._type2LandBillsNum;
  }

  public set type2LandBillsNum(proposedValue: number) {
    this._type2LandBillsNum = getLimitedPositiveValue(proposedValue, 2);
  }

  public get type3LandBillsNum() {
    return this._type3LandBillsNum;
  }

  public set type3LandBillsNum(proposedValue: number) {
    this._type3LandBillsNum = getLimitedPositiveValue(proposedValue, 3);
  }

  public get landBillsNum() {
    return this._type1LandBillsNum + this._type2LandBillsNum + this._type3LandBillsNum;
  }

  public get players(): Player[] {
    return [this.humanPlayer, this.conservativesPlayer, this.imperialsPlayer, this.plutocratsPlayer, this.populistsPlayer];
  }

  public get neutralPlayers(): NeutralPlayer[] {
    return [this.conservativesPlayer, this.imperialsPlayer, this.plutocratsPlayer, this.populistsPlayer];
  }

  public get scenario(): Scenario {
    return this._scenario;
  }

  private set scenario(scenario: Scenario) {
    this._scenario = scenario;
  }

  public hasVisibleWar(): boolean {
    return !!this.activeWars.length
      || !!this.unprosecutedWars.length
      || !!this.imminentWars.length
      || !!this.inactiveWars.length;
  }

  public hasCardInCuria(): boolean {
    return !!this.enemyLeadersInCuria.length 
      || !!this.senatorsInCuria.length
      || !!this.destroyedConcessionsInCuria.length;
  }

  public prepareScenario(scenario: Scenario, gameName: string, playerName: string) {
    this.resetGame(playerName);
    this.name = gameName;

    switch(scenario) {
      case Scenario.EARLY_REPUBLIC:
        this.prepareEarlyRepublicScenario();
        return;
      case Scenario.MIDDLE_REPUBLIC:
        this.prepareMiddleRepublicScenario();
        return;
      case Scenario.LATE_REPUBLIC:
        this.prepareLateRepublicScenario();
        return;
      case Scenario.EARLY_TO_LATE_REPUBLIC:
        this.prepareEarlyToLateRepublicScenario();
        return;
      case Scenario.EARLY_TO_MIDDLE_REPUBLIC:
        this.prepareEarlyToMiddleRepublicScenario();
        return;
      case Scenario.MIDDLE_TO_LATE_REPUBLIC:
        this.prepareMiddleToLateRepublicScenario();
        return;
      case Scenario.ALTERNATE_HISTORY:
        this.prepareAlternateHistoryScenario();
        return;
      default:
        throw new Error('Invalid Scenario');
    }
  }

  private prepareEarlyRepublicScenario() {
    this.scenario = Scenario.EARLY_REPUBLIC;
    this.age = Age.EARLY_REPUBLIC;
    const earlyRepublicDeck = getEarlyRepublicDeck();

    const firstPunicWarCard = earlyRepublicDeck.find(card => card.id === 1) as War;
    this.inactiveWars = [firstPunicWarCard];

    const familyCards = shuffle(earlyRepublicDeck.filter(card => card instanceof Family)) as Family[];
    const factionCards = shuffle(earlyRepublicDeck.filter(card => card instanceof FactionCard)) as FactionCard[];
    const remainingCards = earlyRepublicDeck.filter(card => {
      return card instanceof Family === false && card instanceof FactionCard === false && card.id !== 1;
    });

    this.preparePlayers(familyCards, 3, factionCards);

    const remainingEarlyRepublicDeck = shuffle([...familyCards, ...factionCards, ...remainingCards]);
    const middleRepublicDeck = shuffle(getMiddleRepublicDeck());
    const shuffledLastCards = shuffle([
      ...remainingEarlyRepublicDeck.splice(0, 6),
      ...middleRepublicDeck.slice(0, 6),
      new EraEnds()
    ]);
    this.drawPile = [...shuffledLastCards, ...remainingEarlyRepublicDeck];
    this.availableLegions = this.forcePoolLegions.splice(0, 4);
  }

  private prepareMiddleRepublicScenario() {

  }

  private prepareLateRepublicScenario() {

  }

  private prepareEarlyToLateRepublicScenario() {

  }

  private prepareEarlyToMiddleRepublicScenario() {

  }

  private prepareMiddleToLateRepublicScenario() {

  }

  private prepareAlternateHistoryScenario() {

  }

  private preparePlayers(familyCards: Family[], familiesPerPlayer: number, factionCards: FactionCard[]) {
    this.distributeFamilyCards(familyCards, familiesPerPlayer);
    this.assignTemporaryRomeConsul();
    this.assignNeutralsFactionLeaders();
    this.distributeInitialFactionCards(factionCards);
  }

  private distributeFamilyCards(familyCards: Family[], familiesPerPlayer: number) {
    this.humanPlayer.senators = this.extractSenatorSets(familyCards, familiesPerPlayer);

    const neutralsSenatorsSets = new Array(4).fill('').map(() => this.extractSenatorSets(familyCards, familiesPerPlayer));
    neutralsSenatorsSets.sort((set1, set2) => {
      return this.getTotalMilitaryRating(set1) - this.getTotalMilitaryRating(set2);
    });
    this.imperialsPlayer.senators = neutralsSenatorsSets.pop();

    neutralsSenatorsSets.sort((set1, set2) => {
      return this.getTotalInfluence(set1) - this.getTotalInfluence(set2);
    });
    this.plutocratsPlayer.senators = neutralsSenatorsSets.pop();
    this.conservativesPlayer.senators = neutralsSenatorsSets.shift();
    this.populistsPlayer.senators = neutralsSenatorsSets.pop();

    this.conservativesPlayer.senators = [
      ...this.conservativesPlayer.senators,
      ...this.extractSenatorSets(familyCards, 2)
    ];
    this.populistsPlayer.senators.push(new SenatorSet(familyCards.pop()));
  }

  private extractSenatorSets(familyCards: Family[], quantity: number): SenatorSet[] {
    return familyCards.splice(0, quantity).map((family) => {
      return new SenatorSet(family);
    });
  }

  private assignTemporaryRomeConsul() {
    const mostInfluentialPlutocratSenator =  this.plutocratsPlayer.mostInfluentialSenator;
    mostInfluentialPlutocratSenator.majorOffice = this.availableMajorOffices.find((office) => {
      return office.rank === 2;
    })
    mostInfluentialPlutocratSenator.influence += 5;
    this.availableMajorOffices = this.availableMajorOffices.filter((office) => office.rank !== 2);
  }

  private assignNeutralsFactionLeaders() {
    this.neutralPlayers.forEach(player => player.chooseFactionLeader());
  }

  private getTotalMilitaryRating(senators: SenatorSet[]): number {
    return senators.reduce((acc, senatorSet) => {
      return acc + senatorSet.military;
    }, 0);
  }

  private getTotalInfluence(senators: SenatorSet[]): number {
    return senators.reduce((acc, senatorSet) => {
      return acc + senatorSet.influence;
    }, 0);
  }

  private distributeInitialFactionCards(factionCards: FactionCard[]) {
    this.players.forEach((player) => player.handCards = factionCards.splice(0, 3));

    this.neutralPlayers.forEach((player) => {
      player.handCards.forEach((card) => {
        if (card instanceof Statesman && this.isStatesmanPlayableByPlayer(card, player)) {
          player.playStatesman(card);
          return;
        }
        if (card instanceof Concession) {
          player.playConcession(card);
        }
      })
    })
  }

  private isStatesmanPlayableByPlayer(statesman: Statesman, playingPlayer: Player): boolean {
    return !this.players.some((player) => {
      if (player === playingPlayer) {
        return player.hasStatesmanInFamilyIdSet(statesman.familyId);
      }
      return player.hasFamilyId(statesman.familyId);
    });
  }

  private resetGame(playerName: string) {
    this.name = null;
    this.age = null;
    this.phase = GamePhase.MORTALITY;
    this.humanPlayer = new HumanPlayer(playerName);
    this.conservativesPlayer = new ConservativesPlayer();
    this.imperialsPlayer = new ImperialsPlayer();
    this.plutocratsPlayer = new PlutocratsPlayer();
    this.populistsPlayer = new PopulistsPlayer();
    this.activePlayer = null;
    this.drawPile = [];
    this.discardPile = [];
    this.inactiveWars = [];
    this.imminentWars = [];
    this.unprosecutedWars = [];
    this.activeWars = [];
    this.laws = [];
    this.availableMajorOffices = getAllMajorOffices();
    this.enemyLeadersInCuria = [];
    this.senatorsInCuria = [];
    this.destroyedConcessionsInCuria = [];
    this.forcePoolLegions = getFullLegionPool();
    this.forcePoolFleets = getFullFleetPool();
    this.availableLegions = [];
    this.availableFleets = [];
    this.stateTreasury = 100;
    this.unrestLevel = 0;
    this.type1LandBillsNum = 0;
    this.type2LandBillsNum = 0;
    this.type3LandBillsNum = 0;
    this.scenario = null;
  }

}
