const _ten = (string = '') => {
    const str = string.split('');
    const result = str.sort((prev, curr) => {
        if (prev.toLocaleLowerCase() > curr.toLocaleLowerCase()) {
            return 1;
        } else if (prev.toLocaleLowerCase() < curr.toLocaleLowerCase()) {
            return -1;
        }
        return 0;
    }).join('');

    console.log(`The string converted in alphabetical order is: ${result}`);
};

_ten('Sameer');