import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/leagues/leagues.component').then(
        (mod) => mod.LeaguesComponent
      ),
  },
  {
    path: 'team/:id',
    loadComponent: () =>
      import('./components/teams/teams.component').then(
        (mod) => mod.TeamsComponent
      ),
  },
];
