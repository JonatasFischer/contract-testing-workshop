const { Pact } = require('@pact-foundation/pact');
const axios = require('axios');
//we import the interaction that we defined at the prophecy with a new name (initialStatusInteraction)
const { interaction: initialStatusInteraction, prophecy, version: intialStatusVersion  } = require('../prophecies/sporteventstatus/contract');
//from the helper we import the publisher and the configurer that we defined at the helper
const { publisher: pactPublisher, configurer } = require('../pact.broker.helper');

describe('Define pact with propefy', () => {
    let pactConfig = configurer('FirstMicroFrontend', 'SportEventStatusProphecyProducer');
    const provider = new Pact(pactConfig);

    beforeAll(() => provider.setup());
    afterEach(() => provider.verify());
    // Finalize the Pact mock server after all tests and publish the contract
    afterAll(async () => {
        await provider.finalize();
        return pactPublisher(intialStatusVersion);
    }, 30000);

    //let's do our first test
    describe('when a request for data is made and I want something else saved', () => {
        //here we define the expected response
        // Define the expected interaction
        beforeAll(() => provider.addInteraction(initialStatusInteraction));
        // here we test our client code <====== this is your test!!!!!!!
        it('will receive the expected data', () => {
            // Define the base URL to the Pact mock server

            const apiClient = axios.create({ baseURL: pactConfig.baseURL });
            console.log(`Axios will query on URL ${pactConfig.baseURL}`)

            // Make the request and assert the response
            return apiClient.get('/sporteventstatus').then(response => {
                expect(response.status).toBe(200);
                //in a real world you aren't going to assert if you receive the same data that you send, but if your client code is producing the expected result
                expect(response.data)
                    .toEqual(prophecy);
            });
        });
    });
});
