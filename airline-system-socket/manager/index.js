'use strict';

const io = require('socket.io-client');
const { HOST, eventType, } = require('../config');
const { flights } = require('../config/dummy-data');
const { handleArrived, handleThankPilot, handleNewFlight } = require('../controller');


const socket = io.connect(HOST);

for (let i = 0; i < flights.length; i++) {
    setTimeout(() => {
        handleNewFlight(flights[i]);
        socket.emit(eventType.newFlight, flights[i]);
    }, i * 10000);
}


socket.on(eventType.arrived, pyaload => {
    setTimeout(() => {
        handleThankPilot(pyaload);
    }, 100);
});