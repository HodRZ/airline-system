'use strict';

const { PORT, eventType } = require('../config');
const { flights } = require('../config/dummy-data');
const { handleLogger } = require('../controller');

const io = require('socket.io')(PORT);

const airline = io.of('/airline');

io.on('connection', socket => {
    socket.on(eventType.newFlight, payload => {
        handleLogger(eventType.newFlight, payload);
        setTimeout(() => {
            airline.emit(eventType.takeOff, payload);
            setTimeout(() => {
                handleLogger(eventType.takeOff, payload);

            }, 100);
        }, 4000);
    });
});



for (let i = 1; i <= flights.length; i++) {
    setTimeout(() => {
        io.emit(eventType.arrived, flights[i - 1]);
        handleLogger(eventType.arrived, flights[i - 1]);
    }, i * 17000);
}