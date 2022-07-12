const repeatingCharacters = (string = '') => {
    for (let i = 0; i < string.length; i++) {
        if (string.lastIndexOf(string[i]) !== i) {
            return string[i];
        }
    }
    return -1;
};

console.log(
    repeatingCharacters('legolas'),
    repeatingCharacters('Gandalf'),
    repeatingCharacters('Balrog'),
    repeatingCharacters('Isildur')
);