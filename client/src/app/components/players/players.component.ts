import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ApiService } from '../../services/api.services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Player } from '../../models/player.interface';

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
  players$: Observable<Player[]> | undefined;

  constructor(
    private playersService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    console.log('test');
    this.players$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.playersService.getPlayersByTeamId(params.get('teamId')!);
      })
    );
  }
}
