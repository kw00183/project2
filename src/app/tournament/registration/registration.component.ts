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

  public players: Array<string>;
  public informationMessages: string;

//  public contestantsForm: FormGroup = new FormGroup({
//    contestant0: new FormControl(null, [Validators.minLength(2)]),
//    contestant1: new FormControl(null, [Validators.minLength(2)]),
//    contestant2: new FormControl(null, [Validators.minLength(2)]),
//    contestant3: new FormControl(null, [Validators.minLength(2)]),
//    contestant4: new FormControl(null, [Validators.minLength(2)]),
//    contestant5: new FormControl(null, [Validators.minLength(2)]),
//    contestant6: new FormControl(null, [Validators.minLength(2)]),
//    contestant7: new FormControl(null, [Validators.minLength(2)])
//  });

  constructor(rosterService: RosterService) {
    this.informationMessages = '';
    this.players = ['','','','','','','',''];
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  registerContestants(players: Array<string>) {
    for (let i = 0; i < players.length; i++) {
      if (players[i] != null
        && players[i] != ''
        && players.toString().toLowerCase().indexOf(player[i].toLowerCase()) === -1)
        this.players.push(players[i]);
    }

    if (this.players.length == 2
      || this.players.length == 4
      || this.players.length == 8) {
      for (let i = 0; i < this.players.length; i++) {
        rosterService.addContestant(this.players[i]);
      }
    }
  }
}
