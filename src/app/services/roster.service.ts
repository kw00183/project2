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

  clearContestants() {
    this.contestants = [];
    this.contestants$.next(this.contestants);
  }

  addContestant(player: string) {
    try {
      if (player != null
        && player.trim() != ""
        && this.contestants.toString().toLowerCase().indexOf(player.trim().toLowerCase()) === -1) {
        this.contestants.push(player);
        this.contestants$.next(this.contestants);
      } else if (player == null) {
        throw new Error('Name cannot be null');
      } else if (player == "" || player.trim() == "") {
        throw new Error('Name cannot be empty');
      } else if (this.contestants.toString().toLowerCase().indexOf(player.trim().toLowerCase()) !== -1) {
        throw new Error('Name already exists');
      }
    }
    catch(e) {
//      console.log(e);
    }
  }
}
