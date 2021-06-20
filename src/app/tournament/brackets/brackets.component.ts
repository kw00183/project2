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

  public match: Match;

  constructor(private rosterService: RosterService, private winnerService: WinnerService) {
    this.brackets = [];
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

  trackRounds() {

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

  createBrackets() {
    let bracket1 = [];
    let bracket2 = [];
    let bracket3 = [];
    let bracket4 = [];
    if (this.contestants[1] != "") {
      bracket1 = new Match(this.contestants[0],this.contestants[1],'').getMatch();
      this.brackets[0] = bracket1;
    }
    if (this.contestants[3] != "") {
      bracket2 = new Match(this.contestants[2],this.contestants[3],'').getMatch();
      this.brackets[1] = bracket2;
    }
    if (this.contestants[7] != "") {
      bracket3 = new Match(this.contestants[4],this.contestants[5],'').getMatch();
      bracket4 = new Match(this.contestants[6],this.contestants[7],'').getMatch();

      this.brackets[2] = bracket3;
      this.brackets[3] = bracket4;
    }
  }
}
