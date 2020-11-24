// const fetch = require('node-fetch');

// access API Star Wars
// dependency injection with fetch1 parameter
const findPeoplePromise = (fetch1) => {
    return fetch1(`https://swapi.py4e.com/api/people`)
        .then(resp1 => resp1.json()) //format JSON put in JS format
        .then(respData => { // retrieving datas= people here
            console.log('Promise/ Star Wars respData.count = nbr of objects =', respData.count);
            return {
                count: respData.count,
                results: respData.results,
            };
        })
};
//
const findPeopleAsyncAwait = async (fetch1) => {
    const getJson = await fetch1(`https://swapi.py4e.com/api/people`);
    const getJs = await getJson.json(); //format JSON put in JS format
    console.log('Async/ Star Wars respData.count = nbr of objects =', getJs.count);
    return {
        count: getJs.count,
        results: getJs.results,
    };
}
/* findPeoplePromise();
findPeopleAsyncAwait(); */
/* console.log("findPeoplePromise() =>", findPeoplePromise());
console.log("findPeopleAsyncAwait() =>", findPeopleAsyncAwait()); */

module.exports = {findPeoplePromise,findPeopleAsyncAwait};