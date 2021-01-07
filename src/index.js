const numberOfQuestions = 3;

function getRandomInteger() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomInteger());
let correctAnswerCount = 0;
let incorrectAnswerCount = 0;
let sumOfQue = 0;
let num11;
let num22;
let answer2;

for (let i = 0; i <numberOfQuestions; i++) {
    const num1 = getRandomInteger();
    const num2 = getRandomInteger();

    const result = num1 * num2;

    do {
        const answer = prompt(`Ile jest:  ${num1} * ${num2} ?`);
        answer2 = parseInt(answer);

        if (isNaN(parseInt(answer))) {
            alert(`Podaj liczbę!`);
        }
        num11 = num1;
        num22 = num2;
        sumOfQue++;

    } while (answer2 !== result);


    if (answer2 === result) {
        correctAnswerCount++;
    }

    // if (answer !== result) {
    //     break;
    // }

}


incorrectAnswerCount = sumOfQue - correctAnswerCount;
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

