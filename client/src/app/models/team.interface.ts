import { Player } from './player.interface';

export interface Team {
  _id: string;
  name: string;
  thumbnail: string;
  players: Player[];
}
