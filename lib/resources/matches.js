Resource = require('../resource');
method = require('../method');

module.exports = class Matches extends Resouce {
  searchPlayers: method({}),
  searchPlayersAdvanced: method({}),
  searchTeams: method({}),
  searchTeamsAdvanced: method({}),
  searchUuid: method({})
};