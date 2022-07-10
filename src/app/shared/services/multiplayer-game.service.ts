import { Injectable } from '@angular/core';
import { Scenario } from '../models/scenario.model';

@Injectable({
  providedIn: 'root'
})
export class MultiplayerGameService {

  private _scenario: Scenario;

  constructor() {}

  public get scenario(): Scenario {
    return this._scenario;
  }

  private set scenario(scenario: Scenario) {
    this._scenario = scenario;
  }
}
