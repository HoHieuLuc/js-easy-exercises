// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n, row = 0, level = '') {
    for (let i = 1; i <= n; i++) {
        const spaces = new Array(n - i).fill(' ').join('');
        const sharps = new Array(i * 2 - 1).fill('#').join('');

        console.log(`${spaces}${sharps}${spaces}`);
    }
}

module.exports = pyramid;