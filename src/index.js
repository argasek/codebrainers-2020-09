const numberOfQuestions = 3;

function getRandomInteger() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomInteger());
let correctAnswerCount = 0;
let incorrectAnswerCount = 0;

for (let i = 0; i <numberOfQuestions; i++) {
    const num1 = getRandomInteger();
    const num2 = getRandomInteger();
    let answer = 0;
    do {
        answer = parseInt(prompt(`Ile jest ${num1} * ${num2} ?`));
    } while (isNaN(answer));
    const result = num1 * num2;

    console.log(num1, num2, result, answer);

    if (answer === result) {
        correctAnswerCount++;
    }
}
incorrectAnswerCount = numberOfQuestions - correctAnswerCount;
console.log(correctAnswerCount);
console.log(incorrectAnswerCount);


function isExamPassed(total, answerCount) {
    return answerCount >= total * 0.6;
}
if (isExamPassed(numberOfQuestions,correctAnswerCount)){
    alert(`Zdałeś!. Ilość poprawnych odpowiedzi: ${correctAnswerCount} na ${numberOfQuestions}`);
} else {
    alert(`Nie zdałeś! Ilość błędnych odpowiedzi: ${incorrectAnswerCount} na ${numberOfQuestions}`);
}

