import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Scenario, allScenarios } from 'src/app/shared/models/scenario.model';
import { SoloGameService } from 'src/app/shared/services/solo-game.service';

@Component({
  selector: 'app-new-solo-game-setup',
  templateUrl: './new-solo-game-setup.component.html',
  styleUrls: ['./new-solo-game-setup.component.scss'],
})
export class NewSoloGameSetupComponent {
  
  public scenariosList = allScenarios;

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private soloGameService: SoloGameService,
  ) {}

  public async createNewSoloGame(scenario: Scenario) {
    const alert = await this.alertCtrl.create({
      header: `${scenario} Scenario`,
      message: 'Insert a name to the game and to the player',
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
            const gameName: string = data.gameName.trim();
            const playerName: string = data.playerName.trim();
            if (gameName && playerName) {
              this.soloGameService.prepareScenario(scenario, gameName, playerName);
              return true;
            }
            return false;
          }
        }
      ],
      inputs: [
        {
          name: 'gameName',
          placeholder: 'Game name...',
          attributes: { maxlength: 10 },
        },
        {
          name: 'playerName',
          placeholder: 'Player name...',
          attributes: { maxlength: 10 },
        }
      ]
    });

    await alert.present();
    const { role } = await alert.onWillDismiss();
    if (role !== 'cancel') {
      this.router.navigate(['/solo-game']);
    }
  }
}
