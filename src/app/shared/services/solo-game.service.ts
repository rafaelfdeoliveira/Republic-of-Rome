import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { WarSet } from '../models/war-set.model';
import { War } from '../models/war.model';
import { Law } from '../models/law.model';
import { EnemyLeader } from '../models/enemy-leader.model';
import { Family } from '../models/family.model';
import { Concession } from '../models/concession.model';
import { Legion } from '../models/legion.model';
import { Fleet } from '../models/fleet.model';
import { getLimitedPositiveValue } from '../utilities/common.utility';

@Injectable({
  providedIn: 'root'
})
export class SoloGameService {

  public drawPile: Card[] = [];
  public discardPile: Card[] = [];
  public inactiveWars: War[] = [];
  public imminentWars: War[] = [];
  public unprosecutedWars: WarSet[] = [];
  public activeWars: WarSet[] = [];
  public laws: Law[] = [];
  public enemyLeadersInCuria: EnemyLeader[] = [];
  public senatorsInCuria: Family[] = [];
  public destroyedConcessionsInCuria: Concession[] = [];
  public forcePoolLegions: Legion[] = [];
  public forcePoolFleets: Fleet[] = [];
  public activeForcesLegions: Legion[] = [];
  public activeForcesFleets: Fleet[] = [];
  public stateTreasure: number = 0;
  private _type1LandBillsNum: number = 0;
  private _type2LandBillsNum: number = 0;
  private _type3LandBillsNum: number = 0;
  
  constructor() {}

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

  private clearGameData() {

  }

}
