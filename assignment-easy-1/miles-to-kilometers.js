const _three = (miles, kilometers) => {
    const milesToKilometers = Math.round(miles * 1.609 * 100) / 100;
    const kilometersToMiles = Math.round(kilometers / 1.609 * 100) / 100;

    console.log(`${miles} miles = ${milesToKilometers} Kilometers, ${kilometers} kilometers = ${kilometersToMiles} miles.`);
};

_three(15, 9);