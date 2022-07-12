const _ten = (string = '') => {
    const str = string.split('');
    const result = str.sort((prev, curr) => {
        return prev.toLocaleLowerCase() > curr.toLocaleLowerCase() ? 1 : -1;
    }).join('');

    console.log(`The string converted in alphabetical order is: ${result}`);
};

_ten('Sameer');