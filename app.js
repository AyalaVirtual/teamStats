const team = {
  _players: [
    {firstName: "Anain", lastName: "Ayala", age: 45}, 
    {firstName: "Antonio", lastName: "Iraheta", age: 39}, 
    {firstName: "Jonathan", lastName: "Soto", age: 34}
  ],
  _games: [
    {opponent: "Caroline", teamPoints: 7, opponentPoints: 4}, 
    {opponent: "Wendy", teamPoints: 9, opponentPoints: 17}, 
    {opponent: "Erica", teamPoints: 12, opponentPoints: 14}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    }
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    }
    this.games.push(game);
  }
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("Titans", 100, 98);
console.log(team.games);

