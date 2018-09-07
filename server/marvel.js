var request = require('superagent');
var md5 = require('md5');

var publicKey = '94a9e0e0d25a311d293401bb48f2c81b';
var privateKey = '9bae6c4fcdad915a9570aed4ec090ba0c38702b8';
var baseURL = 'http://gateway.marvel.com/v1/public/';

var makeRequest = function(resource, options, callback) {
  var timestamp = Date.now();

  if (!resource) {
    throw new Error('Resource is required to make an API call');
  }

  request.get(baseURL + resource)
    .query({
      ts: timestamp,
      apikey: publicKey,
      hash: md5(timestamp + privateKey + publicKey)
    })
    .query(options || {})
    .end(function(err, res) {
      if (res && res.body) {
        callback(res.body);
      } else {
        throw new Error('Error making request: ' + err ? err : 'undefined');
      }
    });
};

var characters = function(searchTerm, callback) {
  var options = {
    nameStartsWith: searchTerm
  };

  makeRequest('characters', options, function(response) {
    callback(response.data);
  });
};

module.exports = characters;
