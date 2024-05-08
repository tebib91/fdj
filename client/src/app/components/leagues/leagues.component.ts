import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  finalize,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { ApiService } from '../../services/api.services';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { League } from '../../models/league.interface';
import { Router, RouterModule } from '@angular/router';
import { TeamsComponent } from '../teams/teams.component';

@Component({
  selector: 'app-leagues',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TeamsComponent,
  ],
  providers: [ApiService],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaguesComponent {
  searchTerm: string = '';
  isLoading: boolean = false;

  private searchTerms = new Subject<string>();
  leagues$: Observable<League[]>;
  selectedLeague!: string[];

  constructor(private leagueService: ApiService, private router: Router) {
    this.leagues$ = this.searchTerms.pipe(
      debounceTime(300), // Wait for 300ms after each keystroke
      distinctUntilChanged(), // Ignore if the new term is the same as the previous term
      switchMap((term: string) => {
        this.isLoading = true; // Set loading state to true before making the request
        return this.leagueService.searchLeagues(term).pipe(
          // Use finalize operator to set loading state to false regardless of success or error
          finalize(() => (this.isLoading = false))
        );
      })
    );
  }

  search() {
    this.searchTerms.next(this.searchTerm.trim());
  }
  navigateToTeams(leagueId: string) {
    this.router.navigate(['/teams', leagueId]);
  }

  getTeams(teamsIds: string[]): string[] {
    this.selectedLeague = teamsIds;
    return this.selectedLeague;
  }

  trackById(index: number, item: League): string {
    return item._id;
  }
}
