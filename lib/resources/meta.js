'use strict';

const Resource = require('../resource');
const method = require('../method');

module.exports = class Meta extends Resource {
  status() {
    return method({
      method: 'GET',
      path: '/status',
      params: {}
    });
  }
};