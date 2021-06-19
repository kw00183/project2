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
      
      throw new Error('Something bad happened');
    }
    catch(e) {
      console.log(e);
    }
  }
}
