import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SoloGamePageRoutingModule } from './solo-game-routing.module';
import { SoloGamePage } from './solo-game.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoloGamePageRoutingModule,
    SharedModule,
  ],
  declarations: [SoloGamePage]
})
export class SoloGamePageModule {}
