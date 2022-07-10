import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoloGamePage } from './solo-game.page';

const routes: Routes = [
  {
    path: '',
    component: SoloGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoloGamePageRoutingModule {}
