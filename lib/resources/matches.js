'use strict';

const Resource = require('../resource');
const method = require('../method');

module.exports = class Matches extends Resource {
  searchPlayersAdvanced(arg){
    const params = {
      "Criteria": {
        "PlayerNames": arg.playerNames,
        "GameType": arg.gameType,
        "Actor": arg.actor,
        "StartTime": arg.startTime,
        "EndTime": arg.endTime
      }
    };
    return method({
      method: 'POST',
      path: '/Matches/SearchPlayers',
      params: params
    });
  }

  searchTeamsAdvanced(arg) {
    const params = {
      "Criteria": {
        "TeamNames": arg.teamNames,
        "GameType": arg.gameType,
        "Actor": arg.actor,
        "StartTime": arg.startTime,
        "EndTime": arg.endTime
      }
    };
    return method({
      method: 'POST',
      path: '/Matches/SearchTeams',
      params: params
    });
  }
  searchUuid(arg) {
    const params = {
      "Criteria": {
        "UUID": arg.uuid,
        "StartTime": arg.startTime,
        "EndTime": arg.endTime
      }
    };
    return method({
      method: 'POST',
      path: '/Matches/SearchUUID',
      params: params
    });
  }
};