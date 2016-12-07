'use strict';

const Resource = require('../resource');
const method = require('../method');

module.exports = class Link extends Resource {
  generateCode() {
    return method({
      method: 'POST',
      path: '/Link/GenerateCode',
      params: {}
    });
  }

  validateCode() {
    return method({
      method: 'GET',
      path: '/Link/ValidateCode',
      params: {}
    });
  }
};