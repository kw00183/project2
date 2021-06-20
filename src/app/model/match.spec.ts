import { Match } from './match';

describe('Match', () => {
  it('should create an instance', () => {
    let player1 = 'Roy';
    let player2 = 'Moss';
    let winner = 'Moss';
    expect(new Match(player1,player2,winner)).toBeTruthy();
  });

  it('should create a match array with valid player 1, 2 and winner', () => {
    let player1 = 'Roy';
    let player2 = 'Moss';
    let winner = 'Moss';
    let newMatch = new Match(player1,player2,winner);
    expect(newMatch.getMatch().length).toEqual(3);
  });

  it('should create an empty match array if invalid player 1 name', () => {
    let player1 = '';
    let player2 = 'Moss';
    let winner = 'Moss';
    let newMatch = new Match(player1,player2,winner);
    expect(newMatch.getMatch().length).toEqual(0);
  });

  it('should create an empty match array if invalid player 2 name', () => {
    let player1 = 'Roy';
    let player2 = '';
    let winner = 'Moss';
    let newMatch = new Match(player1,player2,winner);
    expect(newMatch.getMatch().length).toEqual(0);
  });

  it('should create an empty match array if invalid winner name', () => {
    let player1 = 'Roy';
    let player2 = 'Moss';
    let winner = '';
    let newMatch = new Match(player1,player2,winner);
    expect(newMatch.getMatch().length).toEqual(0);
  });

  it('should create an empty match array if space is submitted as name', () => {
    let player1 = 'Roy';
    let player2 = 'Moss';
    let winner = ' ';
    let newMatch = new Match(player1,player2,winner);
    expect(newMatch.getMatch().length).toEqual(0);
  });
});
