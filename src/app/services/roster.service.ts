import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  public contestants: string[];
  public contestants$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
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
        && this.contestants.toString().toLowerCase().indexOf(player.toLowerCase()) === -1) {
        this.contestants.push(player);
        this.contestants$.next(this.contestants);
      } else if (player == null) {
        throw new Error('Name cannot be null');
      } else if (player == "") {
        throw new Error('Name cannot be empty');
      } else if (this.contestants.indexOf(player) !== -1) {
        throw new Error('Name already exists');
      }
    }
    catch(e) {
//      console.log(e);
    }
  }
}
