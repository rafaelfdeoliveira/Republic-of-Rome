import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router, UrlTree } from '@angular/router';
import { SoloGameService } from '../services/solo-game.service';

@Injectable({
  providedIn: 'root'
})
export class SoloGameGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(
    private router: Router,
    private soloGameService: SoloGameService
  ) {}

  canActivate(): boolean | UrlTree {
    return !!this.soloGameService.scenario || this.router.parseUrl('/menu');
  }

  canDeactivate(): boolean {
    return true;
  } 
}