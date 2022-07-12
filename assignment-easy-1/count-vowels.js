const _nine = (words = '') => {
    let vowelA = 0;
    let vowelE = 0;
    let vowelI = 0;
    let vowelO = 0;
    let vowelU = 0;
    let vowelY = 0;

    const _words = words.toLowerCase();

    for (let i = 0; i < _words.length; i++) {
        if (_words[i] === 'a') {
            vowelA++;
        } else if (_words[i] === 'e') {
            vowelE++;
        } else if (_words[i] === 'i') {
            vowelI++;
        } else if (_words[i] === 'o') {
            vowelO++;
        } else if (_words[i] === 'u') {
            vowelU++;
        } else if (_words[i] === 'y') {
            vowelY++;
        }
    }

    console.log(`Vowel count: A=${vowelA}, E=${vowelE}, I=${vowelI}, O=${vowelO}, U=${vowelU}, Y=${vowelY}`);
};

_nine('flugElhorn');