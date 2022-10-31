'use strict';

const { handleThankPilot, handleNewFlight, handleLogger, handleTookOff, handleArrived } = require("../src/controllers");
const { flights } = require("../src/data/dummy-DB");


describe('Controllers test', () => {
    it('should send a notification of a new flight', () => {
        const logSpy = jest.spyOn(console, 'log');
        const data = handleNewFlight(flights[0]);
        expect(logSpy).toHaveBeenCalledWith(data);
        expect(data.includes(flights[0].id)).toBeTruthy();
    });


    it('should send a notification that a flight has took-off', () => {
        const logSpy = jest.spyOn(console, 'log');
        const data = handleTookOff(flights[0]);
        expect(data.includes(flights[0].id)).toBeTruthy();
        expect(logSpy).toHaveBeenCalledWith(data);
    });

    it('should send a notification that a flight has arrived', () => {
        const logSpy = jest.spyOn(console, 'log');
        const data = handleArrived(flights[0]);
        expect(data.includes(flights[0].id)).toBeTruthy();
        expect(logSpy).toHaveBeenCalledWith(data);
    });

    it('should log a thanks message to the console', () => {
        const logSpy = jest.spyOn(console, 'log');
        const data = handleThankPilot(flights[0]);
        expect(data.split(', ')[1]).toEqual(flights[0].Flight.Details.pilot);
        expect(logSpy).toHaveBeenCalledWith(data);
    });


    it('should log flight details to the console', () => {
        const logSpy = jest.spyOn(console, 'log');
        const data = handleLogger('arrived', flights[0].Flight);
        expect(logSpy).toHaveBeenCalledWith(data);
        expect(data.Details.flightID).toEqual(flights[0].id);
    });


});