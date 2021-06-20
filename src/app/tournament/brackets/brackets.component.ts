import { Component, OnInit } from '@angular/core';

import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {

  public observableContestants: string[] = [];

  constructor(private rosterService: RosterService) { }

  ngOnInit() {
    this.rosterService.contestants$.subscribe(contestants => {
      this.observableContestants = contestants;
    });
  }
}
