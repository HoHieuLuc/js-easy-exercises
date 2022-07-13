// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str = '') {
    const charMap = {};
    let max = 0;

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    return Object.entries(charMap).reduce((prevChar, [char, value]) => {
        if (value > max) {
            max = value;
            return char;
        }
        return prevChar;
    }, '');
}

module.exports = maxChar;