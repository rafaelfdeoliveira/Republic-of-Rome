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
  
  constructor() {}



}
