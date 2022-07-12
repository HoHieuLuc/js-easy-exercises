const swapCharacters = (string = '', firstChar = '', secondChar = '') => {
    return string.split('').map(char => {
        if (char === firstChar) {
            return secondChar;
        } else if (char === secondChar) {
            return firstChar;
        }
        return char;
    }).join('');
};

console.log(
    swapCharacters('aabbccc', 'a', 'b'),
    swapCharacters('random w#rds writt&n h&r&', '#', '&'),
    swapCharacters('128 895 556 788 999', '8', '9')
);