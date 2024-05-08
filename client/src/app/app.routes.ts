import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./components/leagues/leagues.component').then(
        (mod) => mod.LeaguesComponent
      ),
    children: [
      {
        path: 'league/:id',
        loadComponent: () =>
          import('./components/teams/teams.component').then(
            (mod) => mod.TeamsComponent
          ),
      },
    ],
  },
  {
    path: 'team/:id',
    loadComponent: () =>
      import('./components/players/players.component').then(
        (mod) => mod.PlayersComponent
      ),
  },
];
