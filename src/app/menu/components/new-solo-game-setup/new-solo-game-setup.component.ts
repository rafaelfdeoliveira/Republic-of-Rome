import { Component } from '@angular/core';
import { Scenario } from 'src/app/shared/models/scenario.model';
import { SoloGameService } from 'src/app/shared/services/solo-game.service';

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

  constructor(
    private soloGameService: SoloGameService,
  ) {}

  public createNewSoloGame(scenario: Scenario) {
    

    this.soloGameService.prepareScenario(scenario);

  }
}
