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

  registerContestants(players: string[]) {
    for (let i = 0; i < players.length; i++) {
      if (players[i] != null
        && players[i] != ''
        && this.players.toString().toLowerCase().indexOf(players[i].toLowerCase()) === -1) {
        this.players.push(players[i]);
      } else if (players[i] == null) {
        this.players.push('');
      }
    }

    let countPlayers = this.players.filter(name => name != '').length;
    if (countPlayers === 2
      || countPlayers === 4
      || countPlayers === 8) {
      this.informationMessages = '';
      for (let i = 0; i < this.players.length; i++) {
        this.rosterService.addContestant(this.players[i]);
      }
    } else {
      this.observableContestants = [];
      this.rosterService.clearContestants();
      this.informationMessages = 'Must have pairs of 2, 4 or 8 total valid players with no duplicates';
    }
    console.log(this.players.toString());
  }
}
