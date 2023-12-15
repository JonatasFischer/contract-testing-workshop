const { Pact, Matchers } = require('@pact-foundation/pact');
const axios = require('axios');
const { like } = Matchers;


//lets create our provider
const provider = new Pact({
    consumer: 'MyConsumer',
    provider: 'MyProvider',
    port: 4455,
    log: process.cwd() + '/logs/pact.log',
    dir: process.cwd() + '/pacts',
    spec: 2
});

describe('Pact with Our Provider', () => {
    // Set up the Pact mock server before all tests
    beforeAll(() => provider.setup());
    //check that the request made is valid
    afterEach(() => provider.verify());
    // Finalize the Pact mock server after all tests
    afterAll(() => provider.finalize());


    //let's do our first test
    describe('when a request for data is made', () => {
        //here we define the expected response
        beforeAll(() => {
            // Define the expected interaction
            return provider.addInteraction({ //<== this is your contract!!!!!!!
                uponReceiving: 'a request for data',
                withRequest: {
                    method: 'GET',
                    path: '/data'
                },
                willRespondWith: {
                    status: 200,
                    body: like({ id: 1, name: 'Test Data' })
                }
            });
        });

        // here we test our client code <====== this is your test!!!!!!!
        it('will receive the expected data', () => {
            // Define the base URL to the Pact mock server
            const apiClient = axios.create({
                baseURL: 'http://127.0.0.1:4455'
            });

            // Make the request and assert the response
            return apiClient.get('/data').then(response => {
                expect(response.status).toBe(200);
                expect(response.data).toEqual({ id: 1, name: 'Test Data' });
            });
        });
    });
});
