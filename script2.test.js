const fetch = require('node-fetch'); // requiring package
const { findPeoplePromise, findPeopleAsyncAwait } = require('./script2'); // requiring file

// Tests for Promises codes:
describe('Group II.1: Testing Async fcts: method call-back DONE()', () => {
    it('Test II.1.1: find people with API Swapi', (done1) => {
        //expecting 1 assertion of validation :
        expect.assertions(1);
        findPeoplePromise().then(
            (res) => {
                console.log('Test II.1.1 =>findPeoplePromise() res.count=', res.count);
                expect(res.count).toEqual(87);
                //waiting until done() for validating or not test:
                done1();
            }
        )
    });
});
// Tests for Asynchronous codes:
describe('Group II.2: Testing Async fcts: method RETURN', () => {
    it('Test II.2.1: find people with API Swapi', () => {
        //expecting 2 assertions called for validation :
        expect.assertions(2);
        return findPeopleAsyncAwait().then(
            (res) => {
                console.log('Test II.2.1 =>findPeopleAsyncAwait() res.count =', res.count);
                expect(res.count).toEqual(87);
                expect(res.results.length).toBeGreaterThanOrEqual(10);
            }
        )
    });
});
// Tests for Asynchronous codes:
describe('Group III.2: Testing Async fcts: method .ASYNC .AWAIT', () => {
    it('Test III.2.1: find people with API Swapi', async () => {
        //expecting 1 assertion called for validation :
        expect.assertions(3);
        await findPeoplePromise().then(
            (res) => {
                console.log('Test III.1.1 =>findPeoplePromise() res.count=', res.count);
                expect(res.count).toEqual(87);
            })
        await findPeopleAsyncAwait().then(
            (res) => {
                console.log('Test III.2.1 =>findPeopleAsyncAwait() res.count =', res.count,'; res.results.length =', res.results.length);
                expect(res.count).toEqual(87);
                expect(res.results.length).toBeLessThanOrEqual(11);
            })
    });
});

