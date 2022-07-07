import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SoloGameService } from '../services/solo-game.service';

@Injectable({
    providedIn: 'root'
})
export class GameLoadedGuard implements CanActivate {

  constructor(
    private router: Router,
    private soloGameService: SoloGameService,
  ) {}

  canActivate(): boolean {
    if (this.soloGameService.scenario) {
      return true
    }

    this.router.navigate(['/menu']);
    return false;
  }
}
