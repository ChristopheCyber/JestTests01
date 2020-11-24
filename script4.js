// const fetch = require('node-fetch');

// 'fetch' is injected into this function, defaulting to use "node-fetch" (or 'fetch-ponyfill', 'isomorphic-fetch', etc)
const findPeopleScript4 = (fetch) => {
    // defaulting to use "node-fetch":
    if (!fetch) { fetch = require('node-fetch'); }

    return fetch(`https://swapi.py4e.com/api/people`)
        .then(resp1 => resp1.json()) //format JSON put in JS format
        .then(respData => { // retrieving datas= people here
            console.log('Promise/ Star Wars respData.count = nbr of objects =', respData.count);
            return {
                count: respData.count,
                results: respData.results,
            };
        })
};
// 'fetch' is injected into this function, defaulting to use "node-fetch" (or 'fetch-ponyfill', 'isomorphic-fetch', etc)
function isRequestSuccessful(fetch) {
    if (!fetch) { fetch = require('node-fetch'); }
    return fetch(`https://swapi.py4e.com/api/people`)
      .then(function (response) { return response.status === 200; })
  };

  module.exports = {findPeopleScript4,isRequestSuccessful};