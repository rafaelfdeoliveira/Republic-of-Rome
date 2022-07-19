import { Component } from '@angular/core';
import { SoloGameService } from '../shared/services/solo-game.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(
    private soloGame: SoloGameService
  ) {}

  public isSoloGameLoaded(): boolean {
    return !!this.soloGame.scenario;
  }

}
