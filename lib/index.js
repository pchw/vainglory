'use strict';

const resources = {
  matches: require('./resources/matches'),
  meta: require('./resources/meta')
};

module.exports = class VaingloryApi {
  constructor() {
    for (let resource in resources) {
      this[resource.toLowerCase()] = new resources[resource]();
    }
  }
}
  