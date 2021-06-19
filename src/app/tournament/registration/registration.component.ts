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

  public contestantsForm: FormGroup = new FormGroup({
    contestant0: new FormControl(null, [Validators.minLength(2)]),
    contestant1: new FormControl(null, [Validators.minLength(2)]),
    contestant2: new FormControl(null, [Validators.minLength(2)]),
    contestant3: new FormControl(null, [Validators.minLength(2)]),
    contestant4: new FormControl(null, [Validators.minLength(2)]),
    contestant5: new FormControl(null, [Validators.minLength(2)]),
    contestant6: new FormControl(null, [Validators.minLength(2)]),
    contestant7: new FormControl(null, [Validators.minLength(2)])
  });

  constructor(rosterService: RosterService) {
    this.players = ['', '', '', '', '', '', '', ''];
  }

  registerContestants() {
    if (rosterService.addContestant(contestant0)
      && rosterService.addContestant(contestant1)
      && !rosterService.addContestant(contestant2)) {
      this.players.push(contestant0);
      this.players.push(contestant1);
    } else if (rosterService.addContestant(contestant0)
      && rosterService.addContestant(contestant1)
      && rosterService.addContestant(contestant2)
      && rosterService.addContestant(contestant3)
      && !rosterService.addContestant(contestant4)) {
      this.players.push(contestant0);
      this.players.push(contestant1);
      this.players.push(contestant2);
      this.players.push(contestant3);
    } else if (rosterService.addContestant(contestant0)
      && rosterService.addContestant(contestant1)
      && rosterService.addContestant(contestant2)
      && rosterService.addContestant(contestant3)
      && rosterService.addContestant(contestant4)
      && rosterService.addContestant(contestant5)
      && rosterService.addContestant(contestant6)
      && rosterService.addContestant(contestant7)) {
      this.players.push(contestant0);
      this.players.push(contestant1);
      this.players.push(contestant2);
      this.players.push(contestant3);
      this.players.push(contestant4);
      this.players.push(contestant5);
      this.players.push(contestant6);
      this.players.push(contestant7);
    }
  }

  onSubmit() {
    console.log('Contestants Form Value', this.contestantsForm.value);
  }
}
