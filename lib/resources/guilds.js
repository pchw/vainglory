'use strict';

const Resource = require('../resource');
const method = require('../method');

module.exports = class Guilds extends Resource {
  searchName() {
    return method({
      method: 'POST',
      path: '/Guilds/SearchName',
      params: {}
    });
  }

  searchUuid() {
    return method({
      method: 'POST',
      path: '/Guilds/SearchUuid',
      params: {}
    });
  }
};