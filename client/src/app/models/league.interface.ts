import { Team } from './team.interface';

export interface League {
  _id: string;
  name: string;
  sport: string;
  teams: Team[];
}
