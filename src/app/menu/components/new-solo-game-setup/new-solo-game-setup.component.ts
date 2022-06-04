import { Component } from '@angular/core';
import { Scenario } from 'src/app/shared/models/scenario.model';

@Component({
  selector: 'app-new-solo-game-setup',
  templateUrl: './new-solo-game-setup.component.html',
  styleUrls: ['./new-solo-game-setup.component.scss'],
})
export class NewSoloGameSetupComponent {
  
  public scenariosList = [
    Scenario.EARLY_REPUBLIC,
    Scenario.MIDDLE_REPUBLIC,
    Scenario.LATE_REPUBLIC,
    Scenario.EARLY_TO_LATE_REPUBLIC,
    Scenario.EARLY_TO_MIDDLE_REPUBLIC,
    Scenario.MIDDLE_TO_LATE_REPUBLIC,
    Scenario.ALTERNATE_HISTORY
  ]

  constructor() {}

  public createNewSoloGame(scenario: Scenario) {
    switch(scenario) {
      case Scenario.EARLY_REPUBLIC:
        this.createEarlyRepublicGame();
        return;
      case Scenario.MIDDLE_REPUBLIC:
        this.createMiddleRepublicGame();
        return;
      case Scenario.LATE_REPUBLIC:
        this.createLateRepublicGame();
        return;
      case Scenario.EARLY_TO_LATE_REPUBLIC:
        this.createEarlyToLateRepublicGame();
        return;
      case Scenario.EARLY_TO_MIDDLE_REPUBLIC:
        this.createEarlyToMiddleRepublicGame();
        return;
      case Scenario.MIDDLE_TO_LATE_REPUBLIC:
        this.createMiddleToLateRepublicGame();
        return;
      case Scenario.ALTERNATE_HISTORY:
        this.createAlternateHistoryGame();
        return;
      default:
        throw new Error('Invalid Scenario');
    }
  }

  private createEarlyRepublicGame() {

  }

  private createMiddleRepublicGame() {

  }

  private createLateRepublicGame() {

  }

  private createEarlyToLateRepublicGame() {

  }

  private createEarlyToMiddleRepublicGame() {

  }

  private createMiddleToLateRepublicGame() {

  }

  private createAlternateHistoryGame() {
    
  }

}
