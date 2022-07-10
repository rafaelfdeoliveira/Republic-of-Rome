import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SoloGameGuard } from './shared/guards/solo-game.guard';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'solo-game',
    loadChildren: () => import('./solo-game/solo-game.module').then( m => m.SoloGamePageModule),
    canActivate: [SoloGameGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'menu'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
