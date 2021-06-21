import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WinnerService {

  public winners: string[];
  public winners$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public finalWinner: string;
  public currentRoundNumber: number;

  constructor() {
    this.winners = [];
    this.finalWinner = "";
    this.currentRoundNumber = 1;
  }

  incrementCurrentRound(): void {
    this.currentRoundNumber++;
  }

  getCurrentRound(): number {
    return this.currentRoundNumber;
  }

  setFinalWinner(finalWinner: string): void {
    this.finalWinner = finalWinner;
  }

  getFinalWinner(): string {
    return this.finalWinner;
  }

  addWinners(winners: string[]) {
    if (winners.length == 1) {
      this.finalWinner = winners[0];
    } else {
      this.incrementCurrentRound();
      this.winners = winners;
      this.winners$.next(this.winners);
    }
  }
}
