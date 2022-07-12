const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const checkDate = (string = '') => {
    const [month, day] = string.split(' ');

    if (isNaN(day) || Number(day) <= 0) {
        return false;
    }

    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return day <= 31;
        case 'February':
            return day <= 28;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            return day <= 30;
        default:
            return false;
    }
};

console.log(
    checkDate('January 21'),
    checkDate('Auust 3'),
    checkDate('June 15B'),
    checkDate('February 0'),
    checkDate('December 3k1'),
    checkDate('February 29'),
    checkDate('February 28')
);
