'use strict';

const axios = require('axios');
const request = axios.create({
  headers:{
    "X-API-KEY": "3wCUeHy6RiRBoVjQfbTz32yk9nlUXdj8RzwPd5rj",
    "Accept": "application/json",
  },
  baseURL: "https://api.madglory.com/v1"
});

module.exports = (spec)=> {
  let method = (spec.method || 'get').toLowerCase();
  let path = spec.path;
  let params = spec.params;

  return request[method](path)
  .then((response)=> {
    if (response.status < 300) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(new Error(response.status));
    }
  });
};