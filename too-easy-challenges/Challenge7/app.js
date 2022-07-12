(() => {
    const parseNumber = (value, defaultValue = 0) => {
        if (typeof value !== 'string') {
            return defaultValue;
        }
        const number = parseInt(value);
        return isNaN(number) ? defaultValue : number;
    };

    function Question(question = '', answers = [''], correctAnswer = 0) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;

        this.printQuestion = function () {
            console.log(this.question);
            for (let i = 0; i < this.answers.length; i++) {
                console.log(`${i + 1} - ${this.answers[i]}`);
            }
        }

        this.checkAnswer = function (answerIndex) {
            return parseNumber(answerIndex) - 1 === this.correctAnswer;
        }

        this.toString = function () {
            return `${this.question}\n${this.answers.map(
                (answer, index) => `${index + 1}. ${answer}`)
                    .join('\n')
                }
            `;
        }
    }

    const questions = [
        new Question(
            'What is the name of the main character in the movie "The Matrix"?',
            ['Neo', 'Trinity', 'Morpheus', 'Agent Smith'],
            0
        ),
        new Question(
            `What's 9 + 10?`,
            ['15', '21', '19', '27'],
            1
        ),
        new Question(
            `What's 1 + 1?`,
            ['5', '9', '2', '5454'],
            2
        ),
        new Question(
            `What's 2 + 2?`,
            ['166', '27', '15', '4'],
            3
        ),
    ];

    const selectRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    };

    let score = 0;

    while (true) {
        const randomQuestion = selectRandomQuestion();

        randomQuestion.printQuestion();

        const answer = prompt(`${randomQuestion.toString()}\nEnter your answer (1 - 4): `);
        if (answer === 'exit') {
            break;
        }
        if (randomQuestion.checkAnswer(answer)) {
            console.log('Correct!');
            score++;
        } else {
            console.log('Wrong!');
        }
        console.log(score);
    }
})();