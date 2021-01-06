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
    const answer = parseInt(prompt(`Ile jest:  ${ num1 } * ${ num2 } ?`));
    const result = num1 * num2;

    console.log(num1, num2, result, answer);

    if (answer === result) {
        correctAnswerCount++;
    }
    if (answer !== result) {
        break;
    }

    if (isNaN(answer)) {
        alert(`Podaj liczbę!`);
    }
}


incorrectAnswerCount = numberOfQuestions - correctAnswerCount;
console.log(correctAnswerCount);
console.log(incorrectAnswerCount);


function isExamPassed(total, answerCount) {
    return answerCount >= total * 0.6;
}
if (isExamPassed(numberOfQuestions,correctAnswerCount)){
    alert(`Wygrałeś! Liczba poprawnych odpowiedzi: ${correctAnswerCount}, Liczba błędnych odpowiedzi: ${incorrectAnswerCount}`);
} else {
    alert(`Przegrałeś! Liczba poprawnych odpowiedzi: ${correctAnswerCount}, Liczba błędnych odpowiedzi: ${incorrectAnswerCount}`);
}

