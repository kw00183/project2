import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component, Inject } from '@angular/core';

import { BracketsComponent } from './brackets.component';

import { RosterService } from '../../services/roster.service';
import { WinnerService } from '../../services/winner.service';

describe('BracketsComponent', () => {
  let component: BracketsComponent;
  let fixture: ComponentFixture<BracketsComponent>;
  let rosterService: RosterService;
  let testRosterService: RosterService;
  let winnerService: WinnerService;
  let testWinnerService: WinnerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ BracketsComponent ],
      providers: [ RosterService, WinnerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsComponent);
    component = fixture.componentInstance;
    testWinnerService = TestBed.get(WinnerService);
    testRosterService = TestBed.get(RosterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be the same instance of Service injected via inject(...) and TestBed.get(...)', () => {
    inject([WinnerService], (injectService: WinnerService) => {
        expect(injectService).toBe(testWinnerService);
      })
  });

  it('should show empty brackets on init', () => {
    expect(component.getBrackets().length).toEqual(0);
  });

  it('should show 1 item in bracket array when 2 players set', () => {
    testRosterService.addContestant('Roy',0);
    testRosterService.addContestant('Bill',1);
    component.createBrackets();
    expect(component.getBrackets().length).toEqual(1);
  });

  it('should show 2 items in bracket array when 4 players set', () => {
    testRosterService.addContestant('Roy',0);
    testRosterService.addContestant('Bill',1);
    testRosterService.addContestant('Ted',2);
    testRosterService.addContestant('Percy',3);
    component.createBrackets();
    expect(component.getBrackets().length).toEqual(2);
  });

  it('should show 4 items in bracket array when 8 players set', () => {
    testRosterService.addContestant('Roy',0);
    testRosterService.addContestant('Bill',1);
    testRosterService.addContestant('Ted',2);
    testRosterService.addContestant('Percy',3);
    testRosterService.addContestant('Tom',4);
    testRosterService.addContestant('Jaxon',5);
    testRosterService.addContestant('Jules',6);
    testRosterService.addContestant('Jos',7);
    component.createBrackets();
    expect(component.getBrackets().length).toEqual(4);
  });

  it('should produce a winners list from matches with a winner', () => {
    let match1 = ['Roy','Dan','Dan'];
    let match2 = ['Rick','Morty','Rick'];
    let winners = [match1,match2]
    component.selectWinners(winners);
    expect(testWinnerService.getWinners().length).toEqual(2);
  });

  it('should not produce a winners list from matches with a missing winner', () => {
    let match1 = ['Roy','Dan',''];
    let match2 = ['Rick','Morty','Rick'];
    let winners = [match1,match2]
    component.selectWinners(winners);
    expect(testWinnerService.getWinners().length).toEqual(0);
  });

  it('should reset observable contestants when resetObservableContestants is called after a final winner is chosen', () => {
    testRosterService.addContestant('Roy',0);
    testRosterService.addContestant('Bill',1);
    testRosterService.addContestant('Ted',2);
    testRosterService.addContestant('Percy',3);
    expect(testRosterService.getContestants().length).toEqual(4);
    component.resetObservableContestants();
    expect(testRosterService.getContestants().length).toEqual(0);
  });
});
