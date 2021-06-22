import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  public possibleContestants: string[];
  public contestants: string[];
  public contestants$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public player: string;

  constructor() {
    this.possibleContestants = ['','','','','','','',''];
    this.contestants = [];
    this.player = "";
  }

  getContestants() {
    return this.contestants;
  }

  clearContestants() {
    this.possibleContestants = ['','','','','','','',''];
    this.contestants = [];
    this.contestants$.next(this.contestants);
  }

  addContestant(player: string, index: number) {
    try {
      if (player != null
        && player.trim() != ""
        && this.possibleContestants.toString().toLowerCase().indexOf(player.trim().toLowerCase()) === -1) {
        this.possibleContestants[index] = player;
        this.contestants = this.possibleContestants.filter(name => name != '');
        this.contestants$.next(this.contestants);
      } else if (player == null) {
        throw new Error('Name cannot be null');
      } else if (player == "" || player.trim() == "") {
        throw new Error('Name cannot be empty');
      } else if (this.possibleContestants.toString().toLowerCase().indexOf(player.trim().toLowerCase()) !== -1) {
        throw new Error('Name already exists');
      }
    }
    catch(e) {
//      console.log(e);
    }
  }
}
