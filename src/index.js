const numberOfQuestions = 3;

function getRandomInteger() {
    return Math.floor(Math.random() * 10) + 1;
}

let correctAnswerCount = 0;
let incorrectAnswerCount = 0;

for (let i = 0; i <numberOfQuestions; i++) {
    const num1 = getRandomInteger();
    const num2 = getRandomInteger();

    let answer;

    do {
        answer = parseInt(prompt(`Ile jest ${num1} * ${num2} ?`));
    } while(isNaN(answer));

    const result = num1 * num2;

    if (answer === result) {
        correctAnswerCount++;
    }
}
incorrectAnswerCount = numberOfQuestions - correctAnswerCount;

function isExamPassed(total, answerCount) {
    return answerCount >= total * 0.6;
}
if (isExamPassed(numberOfQuestions,correctAnswerCount)){
    alert(`zdałeś`);
} else {
    alert(`nie zdałeś`);
}

