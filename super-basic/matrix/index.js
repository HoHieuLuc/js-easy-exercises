// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const array = new Array(n).fill(0).map(
        () => Array(n).fill(0)
    );

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    let currentNumber = 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            array[top][i] = currentNumber;
            currentNumber++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            array[i][right] = currentNumber;
            currentNumber++;
        }
        right--;

        for (let i = right; i >= left; i--) {
            array[bottom][i] = currentNumber;
            currentNumber++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            array[i][left] = currentNumber;
            currentNumber++;
        }
        left++;
    }

    return array;
}

console.log(matrix(4));

module.exports = matrix;
