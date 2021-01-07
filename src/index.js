const numberOfQuestions = 3;

function getRandomInteger() {
    return Math.floor(Math.random() * 10) + 1;
}

let answers = [];
let questions = [];

for (let i = 0; i < numberOfQuestions; i++) {
    const num1 = getRandomInteger();
    const num2 = getRandomInteger();

    const question = [ num1, num2 ];
    questions.push(question);

    let answer;

    do {
        answer = parseInt(prompt(`Ile jest ${ num1 } * ${ num2 } ?`));
    } while (isNaN(answer));

    answers.push(answer);
}

function isExamPassed(questionsAskedCount, correctAnswerCount) {
    return correctAnswerCount >= questionsAskedCount * 0.6;
}

function isAnswerCorrect(a, b, c) {
    return c === a * b;
}

const comment = [];
let questionCorrectness = [];

for (let i = 0; i < questions.length; i++) {
    const a = questions[i][0];
    const b = questions[i][1];
    const answer = answers[i];
    const result = isAnswerCorrect(a, b, answer);
    questionCorrectness.push(result);
    comment.push(`User asked if ${a} * ${b} = ${answer} said it was ${result}`);
}

function identity(value) {
    return value;
}

const onlyCorrectAnswersArray = questionCorrectness.filter(identity);
const correctAnswerCount = onlyCorrectAnswersArray.length;

let textToShow = comment.join("\n");

textToShow += '\nDid user pass the exam? ' + isExamPassed(questions.length, correctAnswerCount);

alert(textToShow);

