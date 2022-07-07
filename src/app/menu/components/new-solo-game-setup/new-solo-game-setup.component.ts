import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private router: Router,
    private alertCtrl: AlertController,
    private soloGameService: SoloGameService,
  ) {}

  public async createNewSoloGame(scenario: Scenario) {
    const alert = await this.alertCtrl.create({
      header: 'Enter your name',
      keyboardClose: false,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {

          text: 'Start Game',
          handler: data => {
            if (data.playerName.trim()) {
              this.soloGameService.prepareScenario(scenario, data.playerName.trim());
              return true;
            }
            return false;
          }
        }
      ],
      inputs: [{
        name: 'playerName',
        placeholder: 'Player name...',
        attributes: { maxlength: 10 },
      }]
    });

    await alert.present();
    const { role } = await alert.onWillDismiss();
    if (role !== 'cancel') {
      this.router.navigate(['/game']);
    }
  }
}
