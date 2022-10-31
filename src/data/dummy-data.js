'use strict';

const { faker } = require('@faker-js/faker/locale/en_US');


function createRandomPilot() {
    const sex = faker.name.sexType();
    const firstName = faker.name.firstName(sex);
    const lastName = faker.name.lastName();

    return {
        id: faker.datatype.uuid(),
        name: `${firstName} ${lastName}`
    };
}



function createRandomFlight(pilot) {
    const cityName = faker.address.cityName();
    const flightID = faker.datatype.uuid();

    return {
        id: flightID,
        Flight: {
            time: Date(),
            Details: {
                airLine: 'Royal Jordanian Airlines',
                flightID,
                pilot,
                destination: cityName,
            }
        }
    };
}


const pilots = [];
for (let i = 0; i < 5; i++) {
    pilots.push(createRandomPilot());
}

const flights = [];
for (let i = 0; i < 5; i++) {
    flights.push(createRandomFlight(pilots[i].name));
}


module.exports = {
    flights
};