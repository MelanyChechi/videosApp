import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'a-bela-e-a-fera',
    loadChildren: () => import('./a-bela-e-a-fera/a-bela-e-a-fera.module').then( m => m.ABelaEAFeraPageModule)
  },  {
    path: 'thor',
    loadChildren: () => import('./thor/thor.module').then( m => m.ThorPageModule)
  },
  {
    path: 'minions',
    loadChildren: () => import('./minions/minions.module').then( m => m.MinionsPageModule)
  },
  {
    path: 'cinderela',
    loadChildren: () => import('./cinderela/cinderela.module').then( m => m.CinderelaPageModule)
  },
  {
    path: 'cinderela',
    loadChildren: () => import('./cinderela/cinderela.module').then( m => m.CinderelaPageModule)
  },
  {
    path: 'cruella',
    loadChildren: () => import('./cruella/cruella.module').then( m => m.CruellaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
