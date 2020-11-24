const fetch = require('node-fetch');
// access API Chuck Norris random jokes
const findRndJocke = () => {
    return fetch(`https://api.chucknorris.io/jokes/random`)
        .then(resp1=>resp1.json()) //format JSON put in JS format
        .then(respData => { // retrieving datas= jocke here
            console.log('Chuck Norris Random Jocke :\n',respData.value);
        })
}
findRndJocke();
// access API Chuck Norris random jokes by category from 
//["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
const findRndJockeCateg = (category) => {
    return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(resp1=>resp1.json()) //format JSON put in JS format
        .then(respData => { // retrieving datas= jocke here
            console.log('Chuck Norris Random Jocke from category ',`${category}`,' :\n',respData.value);
        })
}
findRndJockeCateg("dev");
