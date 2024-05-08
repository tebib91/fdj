import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { League } from '../models/league.interface';
import { Team } from '../models/team.interface';
import { Player } from '../models/player.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  searchLeagues(searchTerm: string): Observable<League[]> {
    if (searchTerm.length === 0) {
      return of([]);
    }

    return this.http
      .get<League[]>(`${this.baseUrl}/leagues?name=${searchTerm}`)
      .pipe(
        map((results) => results.slice(0, 5)), // Limit suggestions to top 5 results
        tap((leagues) => console.log('Fetched leagues:', leagues)) // Optional logging
      );
  }

  getLeaguesAll(): Observable<League> {
    return this.http.get<League>(`${this.baseUrl}/leagues/all`);
  }

  getTeamsByLeagueId(_id: string): Observable<League> {
    return this.http.get<League>(`${this.baseUrl}/leagues/${_id}/teams`);
  }

  getPlayersByTeamId(_id: string): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.baseUrl}/teams/${_id}/players`);
  }
}
