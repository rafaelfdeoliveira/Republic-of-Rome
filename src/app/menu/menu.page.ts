import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(
    private router: Router
  ) { }

  public toSoloGame() {
    this.router.navigate(['/solo-game']);
  }
}
