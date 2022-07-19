import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SenatorSetComponent } from './components/senator-set/senator-set.component';
import { FactionCardComponent } from './components/faction-card/faction-card.component';
import { StatesmanComponent } from './components/statesman/statesman.component';
import { IntrigueCardComponent } from './components/intrigue-card/intrigue-card.component';
import { ConcessionComponent } from './components/concession/concession.component';
import { LawComponent } from './components/law/law.component';
import { EnemyLeaderComponent } from './components/enemy-leader/enemy-leader.component';
import { HorizontalScrollComponent } from './components/horizontal-scroll/horizontal-scroll.component';
import { WarComponent } from './components/war/war.component';
import { WarSetComponent } from './components/war-set/war-set.component';
import { FamilyComponent } from './components/family/family.component';

@NgModule({
  declarations: [
    SenatorSetComponent,
    FactionCardComponent,
    StatesmanComponent,
    IntrigueCardComponent,
    ConcessionComponent,
    LawComponent,
    EnemyLeaderComponent,
    HorizontalScrollComponent,
    WarComponent,
    WarSetComponent,
    FamilyComponent,
  ],
  exports: [
    SenatorSetComponent,
    FactionCardComponent,
    ConcessionComponent,
    LawComponent,
    EnemyLeaderComponent,
    HorizontalScrollComponent,
    WarComponent,
    WarSetComponent,
    FamilyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class SharedModule {}