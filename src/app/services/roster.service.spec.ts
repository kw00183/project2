import { TestBed } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  let service: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not allow duplicate names', () => {
    const rosterService = new RosterService();
    rosterService.addContestant('Kim');
    expect(rosterService.addContestant('Kim')).toBeFalsy();
  });

  it('should not allow duplicate names regardless of case', () => {
    const rosterService = new RosterService();
    rosterService.addContestant('Kim');
    expect(rosterService.addContestant('kim')).toBeFalsy();
  });

  it('should not allow null names', () => {
    const rosterService = new RosterService();
    expect(rosterService.addContestant(null)).toBeFalsy();
  });

  it('should not allow empty string names', () => {
    const rosterService = new RosterService();
    expect(rosterService.addContestant('')).toBeFalsy();
  });

  it('should add one contestant', () => {
    const rosterService = new RosterService();
    rosterService.addContestant('Jen');
    var array = rosterService.getContestants();
    expect(array.length = 1).toBeTruthy();
  });

  it('should add several contestants', () => {
    const rosterService = new RosterService();
    rosterService.addContestant('Roy');
    rosterService.addContestant('Moss');
    var array = rosterService.getContestants();
    expect(array.length > 1).toBeTruthy();
  });
});
