'use strict';


const eventType = {
    newFlight: 'new-flight',
    takeOff: 'take-off',
    arrived: 'arrived',
    thankPilot: 'thank-pilot',
    log: 'log'
};

module.exports = {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    AIRLINE_HOST: process.env.AIRLINE_HOST,
    eventType
};