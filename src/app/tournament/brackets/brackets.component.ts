import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RosterService } from '../../services/roster.service';
import { WinnerService } from '../../services/winner.service';

import { Match } from '../../model/match';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {

  public brackets: Array<string[]>;
  public contestants: string[];
  public numberOfRounds: number = 0;
  public informationMessages: string;

  public match: Match;

  constructor(private rosterService: RosterService, private winnerService: WinnerService) {
    this.brackets = [];
    this.informationMessages = '';
  }

  ngOnInit() {
    this.rosterService.contestants$.subscribe(contestants => {
      this.contestants = contestants;
    });
//    this.winnerService.winners$.subscribe(winners => {
//      this.winners = winners;
//    });
    this.getBrackets();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  getNumberOfRounds() {
    if (this.contestants.length == 2) {
      this.numberOfRounds = 1;
    } else if (this.contestants.length == 4) {
      this.numberOfRounds = 2;
    } else if (this.contestants.length == 8) {
      this.numberOfRounds = 3;
    }
  }

  getBrackets(): Array<string[]> {
    this.createBrackets();
    return this.brackets;
  }

  selectWinners(winners: Array<string[]> ) {
    this.informationMessages = '';
    let allChosen = true;
    for (let i = 0; i < winners.length; i++) {
      if (winners[i][2] == "") {
        this.informationMessages = 'You must select a winner for all matches';
        allChosen = false;
      }
    }
    if (allChosen == true) {
      this.informationMessages = '';
//      this.winnerService.addContestant(this.players[i]);
    }
  }

  createBrackets() {
    let bracket1 = [];
    let bracket2 = [];
    let bracket3 = [];
    let bracket4 = [];
    if (this.contestants.length == 8) {
      bracket1 = new Match(this.contestants[0],this.contestants[1],'').getMatch();
      bracket2 = new Match(this.contestants[2],this.contestants[3],'').getMatch();
      bracket3 = new Match(this.contestants[4],this.contestants[5],'').getMatch();
      bracket4 = new Match(this.contestants[6],this.contestants[7],'').getMatch();
      this.brackets[0] = bracket1;
      this.brackets[1] = bracket2;
      this.brackets[2] = bracket3;
      this.brackets[3] = bracket4;
    } else if (this.contestants.length == 4) {
      bracket1 = new Match(this.contestants[0],this.contestants[1],'').getMatch();
      bracket2 = new Match(this.contestants[2],this.contestants[3],'').getMatch();
      this.brackets[0] = bracket1;
      this.brackets[1] = bracket2;
    } else if (this.contestants.length == 2) {
      bracket1 = new Match(this.contestants[0],this.contestants[1],'').getMatch();
      this.brackets[0] = bracket1;
    } else {
      this.brackets = [];
    }
  }
}
