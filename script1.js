const googleDb = [
    'cat.com',
    'soup.com',
    'flower.com',
    'animal.com',
    'cat-picture1.com',
    'cat-picture2.com',
    'favorite-cat.com',
];
// 'dependency injection' of db in the function :
const googleSearch = (term, dataBase) => {
    const matchesOk = dataBase ? dataBase.filter(site => {
        return site.includes(term)
    }) : null;
    return matchesOk ? (matchesOk.length > 3 ? matchesOk.slice(0, 3) : matchesOk) : null;
}

// console.log('pseudo Google Search for \'com\' truncated at 3 elemnts =', googleSearch('com',googleDb) );
// console.log('pseudo Google Search for \'com\' truncated at 2 elemnts =', googleSearch('com',googleDb).slice(0,2) );

// module.exports = {googleSearch1:googleSearch,googleDb1:googleDb};
exports.googleDb1 = googleDb;
exports.googleSearch1 = googleSearch;