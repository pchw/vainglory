'use strict';

const Resource = require('../resource');
const method = require('../method');

module.exports = class Meta extends Resource {
  searchName() {
    return method({
      method: 'POST',
      path: '/Players/SearchName',
      params: {}
    });
  }

  searchUuid() {
    return method({
      method: 'POST',
      path: '/Players/SearchUuid',
      params: {}
    });
  }
};