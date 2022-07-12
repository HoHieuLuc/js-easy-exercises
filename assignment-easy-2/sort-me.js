const sortArray = (array = [], string = '') => {
    switch (string) {
        case 'Asc':
            return array.sort((a, b) => a - b);
        case 'Des':
            return array.sort((a, b) => b - a);
        default:
            return array;
    }
};

console.log(
    sortArray([4, 3, 2, 1], 'Asc'),
    sortArray([7, 8, 11, 66], 'Des'),
    sortArray([1, 2, 3, 4], 'None')
);