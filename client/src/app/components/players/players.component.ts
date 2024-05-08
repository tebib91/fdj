import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ApiService } from '../../services/api.services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Team } from '../../models/team.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersComponent {
  teamPlayers$: Observable<Team> | undefined;

  constructor(
    private playersService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit() {
    this.teamPlayers$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.playersService.getPlayersByTeamId(params.get('id')!);
      })
    );
  }
  back() {
    this.location.back();
  }
}
