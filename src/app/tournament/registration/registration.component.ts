import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  public players: string[];
  public informationMessages: string;
  public observableContestants: string[] = [];

  constructor(private rosterService: RosterService) {
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
      return player.toLowerCase();
    }
    return player;
  }

  checkDuplicates(players: string[]) {
    let enteredPlayers = players.filter(name => name != '');
    let dedupedPlayers = new Map(enteredPlayers.map(s => [s.toLowerCase(), s]));
    let countEnteredPlayers = enteredPlayers.length;
    let countDedupedPlayers = dedupedPlayers.size;
    return countEnteredPlayers === countDedupedPlayers;
  }

  registerContestants(players: string[]) {
    for (let i = 0; i < players.length; i++) {
      if (players[i] == null) {
        this.players.push('');
      } else {
        this.players.push(players[i]);
      }
    }

    this.observableContestants = [];
    this.rosterService.clearContestants();
    this.informationMessages = '';

    let countPlayers = this.players.filter(name => name != '').length;
    if (this.players[0] == ''
      || this.players[1] == '') {
        this.informationMessages = 'Contestant 1 and 2 are required';
    } else if (this.players[0] != ''
      && this.players[1] != ''
      && this.players[2] == ''
      && this.players[3] != ''
      && this.checkDuplicates(this.players)) {
        this.informationMessages = 'Contestants 1-4 require valid names with no duplicates';
    } else if (countPlayers == 8
      && !this.checkDuplicates(this.players)) {
        this.informationMessages = 'Contestants 1-8 require valid names with no duplicates';
    } else {
      for (let i = 0; i < this.players.length; i++) {
        this.rosterService.addContestant(this.players[i]);
      }
    }
  }
}
