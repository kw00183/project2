import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RosterService } from './roster.service';

describe('RosterService', () => {
  let service: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ]
    });
    service = TestBed.inject(RosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not allow duplicate names', () => {
    const rosterService = new RosterService();
    rosterService.addContestant('Kim',0);
    expect(rosterService.addContestant('Kim',0)).toBeFalsy();
  });

  it('should not allow duplicate names regardless of case', () => {
    const rosterService = new RosterService();
    rosterService.addContestant('Kim',0);
    expect(rosterService.addContestant('kim',0)).toBeFalsy();
  });

  it('should not allow null names', () => {
    const rosterService = new RosterService();
    expect(rosterService.addContestant(null,0)).toBeFalsy();
  });

  it('should not allow empty string names', () => {
    const rosterService = new RosterService();
    expect(rosterService.addContestant('',0)).toBeFalsy();
  });

  it('should not allow empty string names of spaces', () => {
    const rosterService = new RosterService();
    expect(rosterService.addContestant('  ',0)).toBeFalsy();
  });

  it('should add one contestant', () => {
    const rosterService = new RosterService();
    rosterService.addContestant('Jen',0);
    var array = rosterService.getContestants();
    expect(array.length = 1).toBeTruthy();
  });

  it('should add several contestants', () => {
    const rosterService = new RosterService();
    rosterService.addContestant('Roy',0);
    rosterService.addContestant('Moss',1);
    var array = rosterService.getContestants();
    expect(array.length > 1).toBeTruthy();
  });
});
