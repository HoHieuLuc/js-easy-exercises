// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    for (let i = 1; i <= n; i++) { 
        const spaces = ' '.repeat(n - i);
        const sharps = '#'.repeat(i);
        console.log(`${sharps}${spaces}`);
    }
}

module.exports = steps;
