'use strict';

const Resource = require('../resource');
const method = require('../method');

module.exports = class Matches extends Resource {
  searchPlayers(){
    return method({
      method: 'POST',
      path: '/matches/search-players',
      params: [
        'playerNames',
        'startTime',
        'endTime'
      ]
    });
  }

  searchPlayersAdvanced(){
    return method({
      method: 'POST',
      path: '/matches/search-players-advanced',
      params: [
        'playerNames',
        'startTime',
        'endTime',
        'actor',
        'gameType',
        'lastEvaluated'
      ]
    });
  }
  searchTeams() {
    return method({
      method: 'POST',
      path: '/matches/search-teams',
      params: [
        'teamNames',
        'startTime',
        'endTime'
      ]
    });
  }
  searchTeamsAdvanced() {
    return method({
      method: 'POST',
      path: '/matches/search-teams-advanced',
      params: [
        'teamNames',
        'startTime',
        'endTime',
        'gameType',
      ]
    });
  }
  searchUuid() {
    return method({
      method: 'POST',
      path: '/matches/search-uuid',
      params: [
        'uuid',
        'startTime',
        'endTime'
      ]
    });
  }
};