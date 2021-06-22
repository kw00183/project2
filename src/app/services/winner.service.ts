import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WinnerService {

  public winners: string[];
  public winners$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public finalWinner: string;
  public finalWinner$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public currentRound: number;
  public currentRound$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() {
    this.winners = [];
    this.finalWinner = "";
    this.currentRound = 1;
  }

  resetWinners(): void {
    this.winners = [];
    console.log("called resetWinners");
  }

  incrementCurrentRound(): void {
    this.currentRound = this.currentRound + 1;
    this.currentRound$.next(this.currentRound);
  }

  getCurrentRound(): number {
    return this.currentRound;
  }

  setFinalWinner(finalWinner: string): void {
    this.finalWinner = finalWinner;
    this.finalWinner$.next(this.finalWinner);
  }

  getFinalWinner(): string {
    return this.finalWinner;
  }

  getWinners(): string[] {
    return this.winners;
  }

  addWinners(winners: string[]) {
    if (winners.length == 1) {
      this.finalWinner = winners[0];
      this.finalWinner$.next(this.finalWinner);
    } else {
      this.incrementCurrentRound();
    }
    this.winners = winners;
    this.winners$.next(this.winners);
  }
}
