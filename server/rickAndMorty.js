const request = require('superagent');

const baseURL = 'https://rickandmortyapi.com/api/';

const makeRequest = async function(resource, options) {
  if (!resource) {
    throw new Error('Resource is required to make an API call');
  }
  let res = await request.get(baseURL + resource).query(options || {});
  return res.body;
};

const getCharacters = async function() {
  let characters = [];
  let page = 1;

  //We're just going to load 5 pages of characters from the API to get a large dataset from the API for easy filtering.
  //In a real application, we would use pagination in the UI, and try to perform a real time search filter through the API.
  while (page < 6) {
    let response = await makeRequest('character', { page });
    characters = [...characters, ...response.results];
    if (response && response.info && response.info.next !== '') {
      page++;
    }
  }

  return characters;
};

module.exports = { getCharacters };
