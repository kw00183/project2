export class Match {

  public match: string[];
  public player1: string;
  public player2: string;
  public winner: string;

  constructor(player1: string, player2: string, winner: string) {
    this.match = [];
    this.player1 = player1;
    this.player2 = player2;
    if (winner == null || winner == "") {
      this.winner = "";
    } else {
      this.winner = winner;
    }
  }

  validName(player: string): boolean {
    let isValidName = false;
    try {
      if (player != null && player.trim() != "") {
        isValidName = true;
      } else if (player == null) {
        throw new Error('Name cannot be null');
      } else if (player == "" || player.trim() == "") {
        throw new Error('Name cannot be empty');
      }
    }
    catch(e) {
//    console.log(e);
    }
    return isValidName;
  }

  setMatch(): void {
    if (this.validName(this.player1) && this.validName(this.player2)) {
      this.match = [this.player1,this.player2,this.winner];
    }
  }

  setWinner(winner: string): void {
    if (this.validName(winner)) {
      this.winner = winner;
    }
  }

  getMatch(): string[] {
    this.setMatch();
    return this.match;
  }
}
