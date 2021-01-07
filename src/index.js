const numberOfQuestions = 3;

function getRandomInteger() {
    return Math.floor(Math.random() * 10) + 1;
}

let correctAnswerCount = 0;
let incorrectAnswerCount = 0;

let answers = [];
let questions = [];

for (let i = 0; i < numberOfQuestions; i++) {
    const num1 = getRandomInteger();
    const num2 = getRandomInteger();

    const question = [num1, num2];
    questions.push(question);

    let answer;

    do {
        answer = parseInt(prompt(`Ile jest ${ num1 } * ${ num2 } ?`));
    } while (isNaN(answer));

    answers.push(answer);
}
incorrectAnswerCount = numberOfQuestions - correctAnswerCount;

console.log(answers);
console.log(questions);

function isExamPassed(total, answerCount) {
    return answerCount >= total * 0.6;
}

function isAnswerCorrect(a, b, c) {
    return c === a * b;
}

for (let i = 0; i < questions.length; i++) {
    console.log(isAnswerCorrect(questions[i][0], questions[i][1], answers[i]));
}

// if (isExamPassed(numberOfQuestions, correctAnswerCount)) {
//     alert(`zdałeś`);
// } else {
//     alert(`nie zdałeś`);
// }

