'use strict';

const Events = require('events');
const events = new Events();

const { handleNewFlight, handleTookOff, handleArrived, handleThankPilot, handleLogger } = require("./controllers");


events.on('new-flight', handleNewFlight);
events.on('take-off', handleTookOff);
events.on('arrived', handleArrived);
events.on('thank-pilot', handleThankPilot);
events.on('log', handleLogger);

const eventType = {
    newFlight: 'new-flight',
    takeOff: 'take-off',
    arrived: 'arrived',
    thankPilot: 'thank-pilot',
    log: 'log'
};

module.exports = { events, eventType };
