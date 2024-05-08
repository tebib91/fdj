import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../../services/api.services';
import { Team } from '../../models/team.interface';
import { Observable, switchMap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {
  team$: Observable<Team> | undefined;

  constructor(
    private TeamService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    console.log('test');
    this.team$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(params.get('teamId'));

        return this.TeamService.getTeamsById(params.get('id')!);
      })
    );
  }

  gotoPlayer(player: any) {
    const playerId = player ? player.id : null;
    this.router.navigate(['/player', { id: playerId }]);
  }
}
