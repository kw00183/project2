import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RosterService } from '../../services/roster.service';
import { WinnerService } from '../../services/winner.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  public players: string[];
  public informationMessages: string;
  public observableContestants: string[] = [];

  constructor(private rosterService: RosterService, private winnerService: WinnerService) {
    this.informationMessages = '';
    this.players = ['','','','','','','',''];
  }

  ngOnInit() {
    this.rosterService.contestants$.subscribe(contestants => {
      this.observableContestants = contestants;
    });
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  toLowerCase(player: string) {
    if (typeof(player) === 'string') {
      return player.toLowerCase().trim();
    }
    return player;
  }

  toLowerCaseArray(players: string[]): string[] {
    let lowerCasePlayers = [];
    for (let i = 0; i < players.length; i++) {
      lowerCasePlayers.push(players[i].toLowerCase().trim());
    }
    return lowerCasePlayers;
  }

  checkDuplicates(players: string[]) {
    let lowerCasePlayers = this.toLowerCaseArray(players);
    let enteredPlayers = lowerCasePlayers.filter(name => name != '');
    let uniquePlayers = Array.from(new Set(enteredPlayers));

    let countEnteredPlayers = enteredPlayers.length;
    let countDedupedPlayers = uniquePlayers.length;

    if (countEnteredPlayers === countDedupedPlayers) {
      return false;
    }
    return true;
  }

  autofill2Players(): void {
    this.players = ['Zoe','Kaylee','','','','','',''];
  }

  autofill4Players() {
    this.players = ['John','Paul','George','Ringo','','','',''];
  }

  autofill8Players() {
    this.players = ['Sally','Joe','Cindy','Bob','Everett','Lewis','Anja','Li'];
  }

  resetPlayers(): void {
    this.players = ['','','','','','','',''];
  }

  registerContestants(players: string[]) {
    this.resetPlayers();
    this.rosterService.clearContestants();
    for (let i = 0; i < players.length; i++) {
      if (players[i] == null) {
        this.players[i] = '';
      } else {
        this.players[i] = players[i].trim();
      }
    }

    this.observableContestants = [];
    this.informationMessages = '';

    let countPlayers = this.players.filter(name => name != '').length;
    if (this.checkDuplicates(this.players) == true) {
      this.informationMessages = 'Contestant names cannot be duplicated';
    } else if (countPlayers > 4 && countPlayers < 8) {
      this.informationMessages = 'All 8 Contestants require valid names';
    } else if (countPlayers > 2 && (this.players[0] == '' || this.players[1] == '' || this.players[2] == '' || this.players[3] == '')) {
      this.informationMessages = 'Contestants 1-4 require valid names with no duplicates';
    } else if (this.players[0] == '' || this.players[1] == '') {
      this.informationMessages = 'Contestants 1 and 2 require valid names';
    } else if (countPlayers == 2 || countPlayers == 4 || countPlayers == 8) {
      this.rosterService.clearContestants();
      for (let i = 0; i < this.players.length; i++) {
        this.rosterService.addContestant(this.players[i],i);
      }
      this.winnerService.resetWinners();
    }
  }
}
