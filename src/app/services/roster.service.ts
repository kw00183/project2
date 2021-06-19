import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  private contestants: Contestants[];
  public player: string;

  constructor() {
    this.contestants = [];
    this.player = "";
  }

  getContestants() : Contestants[] {
    return this.contestants;
  }

  addContestant(player: string) {
    try {
      if (player != null && player != "" && this.contestants.indexOf(player) === -1 ) {
        this.contestants[player];
      } elseif (player == null) {
        throw new Error('Name cannot be null');
      } elseif (player == "") {
        throw new Error('Name cannot be empty');
      } elseif (this.contestants.indexOf(player) !== -1) {
        throw new Error('Name already exists');
      }
    }
    catch(e) {
      console.log(e);
    }
  }
}
