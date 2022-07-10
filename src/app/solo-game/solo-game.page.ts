import { Component } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';
import { SoloGameService } from 'src/app/shared/services/solo-game.service';

@Component({
  selector: 'app-solo-game',
  templateUrl: './solo-game.page.html',
  styleUrls: ['./solo-game.page.scss'],
})
export class SoloGamePage {

  public selectedPlayer: Player = this.game.humanPlayer;

  constructor(
    public game: SoloGameService,
  ) {}

  public changeSelectedPlayer(ev) {
    this.selectedPlayer = ev.detail.value;
  }

}
