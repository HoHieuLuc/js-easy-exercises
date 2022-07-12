const trimZero = (string = '') => {
    return Number(string)
};

console.log(
    trimZero('230.000'),
    trimZero('00402'),
    trimZero('03.1400'),
    trimZero('30')
);