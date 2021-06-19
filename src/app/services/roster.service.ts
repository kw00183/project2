import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  private contestants;
  public player: string;

  constructor() {
    this.contestants = [];
    this.player = "";
  }

  getContestants() {
    return this.contestants;
  }

  addContestant(player: string) {
    try {
      if (player != null
        && player != ""
        && this.contestants.toLowerCase().indexOf(player.toLowerCase()) === -1 ) {
        this.contestants[player];
      } else if (player == null) {
        throw new Error('Name cannot be null');
      } else if (player == "") {
        throw new Error('Name cannot be empty');
      } else if (this.contestants.indexOf(player) !== -1) {
        throw new Error('Name already exists');
      }
    }
    catch(e) {
      console.log(e);
    }
  }
}
