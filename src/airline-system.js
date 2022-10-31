'use strict';

const { flights } = require("./data/dummy-DB");
const { events, eventType } = require("./events/events-pool");

//TODO:
// - new-flight  Manager
// - took-off    Pilot
// - arrived     Pilot
// - log details  control room





for (let i = 1; i <= flights.length; i++) {
    // setInterval(() => {
    setTimeout(() => {
        events.emit(eventType.newFlight, flights[i - 1]);
        events.emit(eventType.log, eventType.newFlight, flights[i - 1]);
    }, (i * 1000));
    setTimeout(() => {
        events.emit(eventType.arrived, flights[i - 1]);
        events.emit(eventType.log, eventType.arrived, flights[i - 1]);
    }, (i * 3000));
    setTimeout(() => {
        events.emit(eventType.takeOff, flights[i - 1]);
        events.emit(eventType.log, eventType.takeOff, flights[i - 1]);
    }, (i * 6000));
    setTimeout(() => {
        events.emit(eventType.thankPilot, flights[i - 1]);
    }, (i * 9000));

    // }, 1000);
}