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

@Component({
  selector: 'app-leagues',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
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

  trackById(index: number, item: League): string {
    return item._id;
  }
}
