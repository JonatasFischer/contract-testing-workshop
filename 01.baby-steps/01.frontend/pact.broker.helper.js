const path = require('path');
const pact = require('@pact-foundation/pact-node');
const pactDirs = path.resolve(process.cwd(), 'pacts')
console.log(`Pact will be generated in ${pactDirs}`)
module.exports = {
    publisher: (version) => pact.publishPacts({
        pactFilesOrDirs: [pactDirs],
        pactBroker: "https://pactbroker.gaming-nonprod.sportradar.online/",
        consumerVersion: version
    }),
    configurer: (consumer, provider) => {
        const port = 2355;
        const host = "127.0.0.1";
        console.log(`Pact will run on port ${port}`)    
        return {
            consumer: consumer,
            provider: provider,
            port,
            host,
            log: process.cwd() + '/logs/pact.log',
            dir: pactDirs,
            spec: 2,
            baseURL: `http://${host}:${port}`
        }
    }

};

