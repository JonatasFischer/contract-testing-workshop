const path = require('path');
const pactDirs = path.resolve(process.cwd(), 'pacts')
module.exports = {
    pactFilesOrDirs: [pactDirs],
    pactBroker: "http://localhost:9292",
    //pactBrokerUsername: "yoda",
    //pactBrokerPassword: "flyingrock",
    consumerVersion: "1.0.0"
};

