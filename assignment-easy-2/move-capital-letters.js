const isUpperCase = (char = '') => {
    return char === char.toUpperCase() && char !== char.toLowerCase();
};

const moveCapitalToFront = (string = '') => {
    const capitalChars = string.split('').filter(isUpperCase);
    const nonCapitalChars = string.split('').filter(char => !isUpperCase(char));

    return [...capitalChars, ...nonCapitalChars].join('');
};

console.log(
    moveCapitalToFront('hApPy'),
    moveCapitalToFront('moveMENT'),
    moveCapitalToFront('shOrtCAKE')
);