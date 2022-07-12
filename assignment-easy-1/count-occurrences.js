const _five = (string = '', char = '') => { 
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    console.log(`The word ${string} has ${count} occurrences of the character ${char}`);
};

_five('map', 'p');