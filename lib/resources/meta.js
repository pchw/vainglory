Resource = require('../resource');
method = require('../method');

module.exports = class Meta extends Resouce {
  status: method({
    method: 'GET',
    path: '/status',
    params: {}
  })
};