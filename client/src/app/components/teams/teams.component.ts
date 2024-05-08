import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  Router,
  RouterModule,
} from '@angular/router';
import { ApiService } from '../../services/api.services';
import { Team } from '../../models/team.interface';
import { Observable, switchMap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { League } from '../../models/league.interface';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [ApiService],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {
  leagueTeams$: Observable<League> | undefined;

  constructor(
    private TeamService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.leagueTeams$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.TeamService.getTeamsByLeagueId(params.get('id')!);
      })
    );
  }

  gotoPlayers(teamId: string) {
    this.router.navigate(['/team', teamId]);
  }
}
