// const googleSearch1 = require('./script');
// const {googleSearch1,googleDb1} = require('./script');
const myImports = require('./script');
const googleSearch1 = myImports.googleSearch1;
const googleDb1 = myImports.googleDb1;

const googleDbMock = [
    'cat2.com',
    'soup2.com',
    'flower2.com',
    'animal2.com',
    'cat-picture12.com',
    'cat-picture22.com',
    'favorite-cat2.com',
];
// it() <=> test() ; it is an ALIAS for test
describe('Group I.1 testing correct inputs', () => {
    it('test I.1.1: finding', () => {
        console.log("googleSearch1=",googleSearch1);
        console.log("googleDb1=",googleDb1);
    
        console.log("googleSearch1('soup',googleDb1)=",googleSearch1('soup',googleDb1));
        expect(googleSearch1('soup',googleDb1)).toStrictEqual([ 'soup.com' ]);
    
        console.log("googleSearch1('pic',googleDbMock)=",googleSearch1('pic',googleDbMock));
        expect(googleSearch1('pic',googleDbMock)).toEqual([ 'cat-picture12.com', 'cat-picture22.com' ]);
    });
    it('test I.1.2: not finding', () => {
        expect(googleSearch1('foo',googleDbMock)).toEqual([]);
    });
});
describe('Group I.2 testing incorrect inputs', () => {
    it('test I.2.1: work with Undefined or Null input', () => {
        var input1 = undefined;
        expect(googleSearch1('input1',googleDbMock)).toEqual([]);
        input1 = null;
        expect(googleSearch1('input1',googleDbMock)).toEqual([]);
    });
    it('test I.2.2: returning 3 matches max', () => {
        expect(googleSearch1('.com',googleDbMock).length).toBe(3);
    });
});
