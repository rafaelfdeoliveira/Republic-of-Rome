import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';
import { SingleplayerMenuComponent } from './components/singleplayer-menu/singleplayer-menu.component';
import { NewSoloGameSetupComponent } from './components/new-solo-game-setup/new-solo-game-setup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [
    MenuPage,
    SingleplayerMenuComponent,
    NewSoloGameSetupComponent
  ]
})
export class MenuPageModule {}
