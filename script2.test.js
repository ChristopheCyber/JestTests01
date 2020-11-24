const fetch = require('node-fetch'); // requiring package
const { findPeoplePromise, findPeopleAsyncAwait } = require('./script2'); // requiring file

// Tests for Promises codes:
describe('Group Script2.I: Testing Async fcts: method call-back DONE()', () => {
    it('Test Script2.I.1: find people with API Swapi', (done1) => {
        //expecting 1 assertion of validation :
        expect.assertions(1);
        findPeoplePromise(fetch).then(
            (res) => {
                console.log('Test Script2.I.1 =>findPeoplePromise() res.count=', res.count);
                expect(res.count).toEqual(87);
                //waiting until done() for validating or not test:
                done1();
            }
        )
    });
});
// Tests for Asynchronous codes:
describe('Group Script2.II: Testing Async fcts: method RETURN', () => {
    it('Test Script2.II.1: find people with API Swapi', () => {
        //expecting 2 assertions called for validation :
        expect.assertions(2);
        return findPeopleAsyncAwait(fetch).then(
            (res) => {
                console.log('Test Script2.II.1 =>findPeopleAsyncAwait() res.count =', res.count);
                expect(res.count).toEqual(87);
                expect(res.results.length).toBeGreaterThanOrEqual(10);
            }
        )
    });
});
// Tests for Asynchronous codes:
describe('Group Script2.III: Testing Async fcts: method .ASYNC .AWAIT', () => {
    it('Test Script2.III.1: find people with API Swapi', async () => {
        //expecting 3 assertions called for validation :
        expect.assertions(3);
        await findPeoplePromise(fetch).then(
            (res) => {
                console.log('Test Script2.III.1.a =>findPeoplePromise() res.count=', res.count);
                expect(res.count).toEqual(87);
            })
        await findPeopleAsyncAwait(fetch).then(
            (res) => {
                console.log('Test Script2.III.1.b =>findPeopleAsyncAwait() res.count =', res.count,'; res.results.length =', res.results.length);
                expect(res.count).toEqual(87);
                expect(res.results.length).toBeLessThanOrEqual(11);
            })
    });
});
// Tests for Asynchronous codes: MOCKing async funct
describe('Group Script2.IV: Testing Async fcts: method MOCK for .ASYNC .AWAIT', () => {
    it('Test Script2.IV.1: find people .count & .results from API Swapi', async () => {
        // MOCKing the .fetch() funct
        const mockFetch = jest.fn().mockReturnValue(
            Promise.resolve({
                json: () => Promise.resolve({
                    count: 87,
                    results: [1,2,3,4,5,6,7,8,9,10,11]
                })
            })
        )
        //expecting 2 assertions called for validation :
        expect.assertions(2);
        await findPeoplePromise(mockFetch).then(
            (res) => {
                console.log('Test Script2.IV.1 =>findPeoplePromise() res.count=', res.count);
                expect(res.count).toEqual(87);
            });
        await expect(mockFetch.mock.calls.length).toBe(1);
    });
});


