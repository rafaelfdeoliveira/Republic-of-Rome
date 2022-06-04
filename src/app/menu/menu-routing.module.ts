import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
import { SingleplayerMenuComponent } from './components/singleplayer-menu/singleplayer-menu.component';
import { NewSoloGameSetupComponent } from './components/new-solo-game-setup/new-solo-game-setup.component';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'singleplayer',
    children: [
      {
        path: '',
        component: SingleplayerMenuComponent
      },
      {
        path: 'new-game',
        component: NewSoloGameSetupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
