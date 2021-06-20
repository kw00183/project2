export class Match {

  constructor(public player1: string,
              public player2: string,
              public winner: string) {}

  getMatch(): string[] {
    return [this.player1,this.player2,this.winner];
  }
}
