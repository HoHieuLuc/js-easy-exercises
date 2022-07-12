const capitalizeFirstLetter = (string = '') => {
    return string.split(' ').map((char) => {
        return char[0].toUpperCase() + char.slice(1);
    }).join(' ');
};

console.log(
    capitalizeFirstLetter('This is a title'),
    capitalizeFirstLetter('capitalize every word'),
    capitalizeFirstLetter('I Like Pizza'),
    capitalizeFirstLetter('PIZZA PIZZA PIZZA')
);