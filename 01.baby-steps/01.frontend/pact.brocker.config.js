const path = require('path');
const pactDirs = path.resolve(process.cwd(), 'pacts')
module.exports = {
    pactFilesOrDirs: [pactDirs],
    pactBroker: "https://pactbroker.gaming-nonprod.sportradar.online/",
    //pactBrokerUsername: "yoda",
    //pactBrokerPassword: "flyingrock",
    consumerVersion: "1.0.0"
};

