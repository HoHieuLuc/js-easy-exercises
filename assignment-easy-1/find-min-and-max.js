const _four = (array = []) => {
    let min = array[0];
    let max = array[0];

    array.forEach((value) => {
        if (value < min) {
            min = value;
        }
        if (value > max) {
            max = value;
        }
    });

    console.log(`The minimum value in the array is: ${min}, the maximum value is ${max}`);
};

_four([-8, -1, -87, -14, -81, -74, -20, -86, -61, -10]);