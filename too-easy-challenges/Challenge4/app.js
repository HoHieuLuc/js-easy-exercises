const parseNumber = (value, defaultValue = 0) => {
    if (typeof value !== 'string') {
        return defaultValue;
    }
    const number = parseInt(value);
    return isNaN(number) ? defaultValue : number;
};

const createPlayer = (id) => {
    const globalScoreDOM = document.querySelector(`#score-${id}`);
    const roundScoreDOM = document.querySelector(`#current-${id}`);

    return {
        DOM: {
            panel: document.querySelector(`.player-${id}-panel`),
            name: document.querySelector(`#name-${id}`),
            globalScore: globalScoreDOM,
            roundScore: roundScoreDOM,
        },
        stats: {
            globalScore: parseNumber(globalScoreDOM.textContent, 0),
            roundScore: parseNumber(roundScoreDOM.textContent, 0)
        }
    }
};

const renderScore = () => {
    player1.DOM.globalScore.textContent = player1.stats.globalScore;
    player1.DOM.roundScore.textContent = player1.stats.roundScore;
    player2.DOM.globalScore.textContent = player2.stats.globalScore;
    player2.DOM.roundScore.textContent = player2.stats.roundScore;
}

const player1 = createPlayer(0);
const player2 = createPlayer(1);

let currentPlayer = player1;

const startGame = () => {
    player1.DOM.panel.classList.remove('winner');
    player2.DOM.panel.classList.remove('winner');

    player1.DOM.panel.classList.add('active');
    player2.DOM.panel.classList.remove('active');

    player1.stats.globalScore = 0;
    player1.stats.roundScore = 0;
    player2.stats.globalScore = 0;
    player2.stats.roundScore = 0;

    renderScore();

    rollDiceButton.classList.remove('disabled');
    holdButton.classList.remove('disabled');

    rollDiceButton.disabled = false;
    holdButton.disabled = false;

    currentPlayer = player1;
};

const newGameButton = document.querySelector('.btn-new');
newGameButton.addEventListener('click', startGame);

const diceDOM = document.querySelector('.dice');

const rollDice = () => {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceDOM.src = `dice-${dice}.png`;
    return dice;
};

const nextPlayer = () => {
    currentPlayer.DOM.panel.classList.remove('active');
    if (currentPlayer === player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
    currentPlayer.DOM.panel.classList.add('active');
};

const rollDiceButton = document.querySelector('.btn-roll');
rollDiceButton.addEventListener('click', () => {
    const dice = rollDice();
    if (dice !== 1) {
        currentPlayer.stats.roundScore += dice;
    } else {
        currentPlayer.stats.roundScore = 0;
        nextPlayer();
    }
    renderScore();
});

const finalScoreInput = document.querySelector('.final-score');
let finalScore = parseNumber(finalScoreInput.value, 100);

finalScoreInput.addEventListener('keyup', () => {
    finalScore = parseNumber(finalScoreInput.value, 100);
    finalScoreInput.value = finalScore;
})

const holdButton = document.querySelector('.btn-hold');
holdButton.addEventListener('click', () => {
    currentPlayer.stats.globalScore += currentPlayer.stats.roundScore;
    currentPlayer.stats.roundScore = 0;

    if (currentPlayer.stats.globalScore >= finalScore) {
        currentPlayer.DOM.panel.classList.add('winner');
        currentPlayer.DOM.panel.classList.remove('active');
        rollDiceButton.classList.add('disabled');
        holdButton.classList.add('disabled');

        rollDiceButton.disabled = true;
        holdButton.disabled = true;
    } else {
        nextPlayer();
    }
    renderScore();
});