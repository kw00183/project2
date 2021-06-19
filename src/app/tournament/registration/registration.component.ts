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

export class RegistrationComponent {

  public players: string[];
  public informationMessages: string;
//  public rosterService: RosterService;

  constructor(rosterService: RosterService) {
    private rosterService: RosterService;
//    this.rosterService = new RosterService();
//    this.rosterService = rosterService;
    this.informationMessages = '';
    this.players = ['','','','','','','',''];
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  registerContestants(players: string[]) {
    console.log('helpme' + players);
    for (let i = 0; i < players.length; i++) {
      if (players[i] != null
        && players[i] != ''
        && players.toString().toLowerCase().indexOf(players[i].toLowerCase()) === -1)
        this.players.push(players[i]);
        console.log('playme' + players[i]);
    }

    if (this.players.length == 2
      || this.players.length == 4
      || this.players.length == 8) {
      for (let i = 0; i < this.players.length; i++) {
        this.rosterService.addContestant(this.players[i]);
      }
    }
  }
}
