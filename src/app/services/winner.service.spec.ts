import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { WinnerService } from './winner.service';

describe('WinnerService', () => {
  let service: WinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ]
    });
    service = TestBed.inject(WinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reset the winners when resetWinners called', () => {
    const winnerService = new WinnerService();
    let winnerArray = ['Kevin'];
    winnerService.addWinners(winnerArray);
    winnerService.resetWinners();
    expect(winnerService.getWinners().length).toEqual(0);
  });

  it('should have winner array with 1 players when 1 added', () => {
    const winnerService = new WinnerService();
    let winnerArray = ['Kevin'];
    winnerService.addWinners(winnerArray);
    expect(winnerService.getWinners().length).toEqual(1);
  });

  it('should have winner array with 2 players when 2 added', () => {
    const winnerService = new WinnerService();
    let winnerArray = ['Kevin','Brandon'];
    winnerService.addWinners(winnerArray);
    expect(winnerService.getWinners().length).toEqual(2);
  });

  it('should set final winner when setFinalWinner called', () => {
    const winnerService = new WinnerService();
    let finalWinner = 'Kevin';
    winnerService.setFinalWinner(finalWinner);
    expect(winnerService.getFinalWinner()).toEqual('Kevin');
  });

  it('should get round 1 when service started', () => {
    const winnerService = new WinnerService();
    expect(winnerService.getCurrentRound()).toEqual(1);
  });

  it('should get round 2 when service started and incrementCurrentRound called', () => {
    const winnerService = new WinnerService();
    winnerService.incrementCurrentRound();
    expect(winnerService.getCurrentRound()).toEqual(2);
  });
});
