const { Matchers } = require('@pact-foundation/pact');
const  prophecy = require('./prophecy.json');
const { like, term } = Matchers;

const version = "1.0.3";

const interaction = {
    given: 'an initial  prophecy',
    uponReceiving: 'a request for data',
    withRequest: {
        method: 'GET',
        path: '/sporteventstatus'
    },

    willRespondWith: {
        status: 200,
        body: like(prophecy)
    }
}

module.exports = { prophecy, interaction , version};
