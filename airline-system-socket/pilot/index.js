'use strict';

const { HOST, AIRLINE_HOST, eventType } = require('../config');

const io = require('socket.io-client');
const { handleTookOff, handleArrived } = require('../controller');

const socket = io.connect(HOST);

const airline = io.connect(AIRLINE_HOST);

airline.on(eventType.takeOff, payload => {
    handleTookOff(payload);
});


socket.on(eventType.arrived, payload => {
    handleArrived(payload);
});