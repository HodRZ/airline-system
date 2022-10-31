'use strict';


const handleNewFlight = (flight) => {
    console.log(`new flight with ID ${flight.id} have been scheduled`);
    return (`new flight with ID ${flight.id} have been scheduled`);
};

const handleThankPilot = (flight) => {
    console.log(`we’re greatly thankful for the amazing flight, ${flight.Flight.Details.pilot}`);
    return (`we’re greatly thankful for the amazing flight, ${flight.Flight.Details.pilot}`);
};

const handleTookOff = (flight) => {
    console.log(`flight with ID ${flight.id} took-off`);
    return (`flight with ID ${flight.id} took-off`);
};

const handleArrived = (flight) => {
    console.log(`flight with ID ${flight.id} has arrived`);
    return (`flight with ID ${flight.id} has arrived`);
};


const handleLogger = (event, flight) => {
    const log = {
        event,
        ...flight.Flight
    };
    console.log(log);
    return (log);
};


module.exports = {
    handleArrived,
    handleLogger,
    handleNewFlight,
    handleThankPilot,
    handleTookOff
}


