import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import { Component, Inject } from '@angular/core';

import { RosterService } from '../../services/roster.service';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let rosterService: RosterService;
  let testRosterService: RosterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ RegistrationComponent ],
      providers: [ RosterService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    testRosterService = TestBed.get(RosterService);
    fixture.detectChanges();
  });

  beforeEach(inject([RosterService],
    (service: RosterService) => {
      rosterService = service;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be the same instance of Service injected via inject(...) and TestBed.get(...)', () => {
    inject([RosterService], (injectService: RosterService) => {
        expect(injectService).toBe(testRosterService);
      })
  });

  it('should show empty contestants in roster service on init', () => {
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should not allow duplicate contestants to add any to roster service', () => {
    let players = ['Roy','Roy','','','','','',''];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should not allow duplicate contestants regardless of case to add any to roster service', () => {
    let players = ['Roy','roy','RoY','','','','',''];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should not allow 3 players to add any to roster service (only 2, 4 and 8)', () => {
    let players = ['Roy','Moss','Jen','','','','',''];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should not allow empty player in position 1 to add any to roster service (only 2, 4, 8)', () => {
    let players = ['','Roy','','','','','',''];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should not allow empty player in position 2 to add any to roster service (only 2, 4, 8)', () => {
    let players = ['Roy','','','','','','',''];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should not allow empty player in position 3 to add any to roster service (only 2, 4, 8)', () => {
    let players = ['Roy','Moss','','Jen','','','',''];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should not allow 5 players to add any to roster service (only 2, 4 and 8)', () => {
    let players = ['Roy','Moss','Jen','Richmond','Douglas','','',''];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should not allow 6 players to add any to roster service (only 2, 4 and 8)', () => {
    let players = ['Roy','Moss','Jen','Richmond','Douglas','Rick','',''];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should not allow 7 players to add any to roster service (only 2, 4 and 8)', () => {
    let players = ['Roy','Moss','Jen','Richmond','Douglas','Rick','Morty',''];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should allow 2 valid players to add to roster service (allowed 2, 4 and 8)', () => {
    let players = ['Roy','Moss','','','','','',''];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(2);
  });

  it('should allow 4 valid players to add to roster service (allowed 2, 4 and 8)', () => {
    let players = ['Roy','Moss','Jen','Richmond','','','',''];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(4);
  });

  it('should allow 8 valid players to add to roster service (allowed 2, 4 and 8)', () => {
    let players = ['Roy','Moss','Jen','Richmond','Douglas','Rick','Morty','Beth'];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(8);
  });

  it('should not allow duplicate contestants to add any to roster service if all fields populated', () => {
    let players = ['Roy','Moss','Jen','Richmond','Douglas','jen','Morty','douglas'];
    component.registerContestants(players);
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should return true if players contain a duplicate of same case', () => {
    let players = ['Roy','Moss','Jen','Richmond','Douglas','Jen','Morty','Douglas'];
    component.registerContestants(players);
    let checkPlayersForDuplicates = component.checkDuplicates(players);
    expect(checkPlayersForDuplicates).toEqual(true);
  });

  it('should return true if players contain a duplicate of different case', () => {
    let players = ['Roy','Moss','Jen','Richmond','douglas','JEn','Morty','Douglas'];
    component.registerContestants(players);
    let checkPlayersForDuplicates = component.checkDuplicates(players);
    expect(checkPlayersForDuplicates).toEqual(true);
  });

  it('should return true if players contain a duplicate with extra spaces at beginning or end', () => {
    let players = ['Roy','Moss','Jen','Richmond','douglas','JEn ','Morty',' Douglas'];
    component.registerContestants(players);
    let checkPlayersForDuplicates = component.checkDuplicates(players);
    expect(checkPlayersForDuplicates).toEqual(true);
  });
});
