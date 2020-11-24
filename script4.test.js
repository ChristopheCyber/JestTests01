const fetch = require('node-fetch'); // requiring package
const { findPeopleScript4,isRequestSuccessful } = require('./script4'); // requiring file

// Tests for Promises codes:
describe('Group Script4.I: Testing Async fcts: method async', () => {
    it('Test Script4.I.1: find people with API Swapi', async () => {
        //expecting 1 assertion of validation :
        expect.assertions(2);
        await findPeopleScript4(fetch).then(
            (res) => {
                console.log('Test Script4.I.1.a =>findPeoplePromise() res.count=', res.count);
                expect(res.count).toEqual(87);
            }
        );
        await isRequestSuccessful(fetch).then(
            (res) => {
                console.log('Test Script4.I.1.b =>isRequestSuccessful() res=', res);
                expect(res).not.toEqual(false);
            }
        );
    });
});
