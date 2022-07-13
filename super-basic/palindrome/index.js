// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str = '') {
    let leftString = '';
    let rightString = '';
    if (str.length % 2 === 0) {
        leftString = str.slice(0, str.length / 2);
        rightString = str.slice(str.length / 2, str.length);
    } else {
        leftString = str.slice(0, Math.floor(str.length / 2));
        rightString = str.slice(Math.floor(str.length / 2) + 1, str.length);
    }

    return leftString === rightString.split('').reverse().join('');
}

module.exports = palindrome;

