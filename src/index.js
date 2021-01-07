const numberOfQuestions = 3;

function getRandomInteger() {
    return Math.floor(Math.random() * 10) + 1;
}

let correctAnswerCount = 0;
let incorrectAnswerCount = 0;
let repeatedQuestion;
let allQuestionsCount
allQuestionsCount = 0;

for (let i = 0; i <numberOfQuestions; i++) {
    const num1 = getRandomInteger();
    const num2 = getRandomInteger();

    const result = num1 * num2;
    let questionsRoundCount;
    questionsRoundCount=0;

    do{
    const answer = parseInt(prompt(`Ile jest ${num1} * ${num2} ?`));
    repeatedQuestion = parseInt(answer);

    if (isNaN(parseInt(answer))) {
        alert ('Please use number!');
        }
        questionsRoundCount++
        allQuestionsCount++;
    } while (repeatedQuestion !== result)
        correctAnswerCount++;
}

incorrectAnswerCount = numberOfQuestions - correctAnswerCount;
console.log(correctAnswerCount);
console.log(incorrectAnswerCount);


function isExamPassed(total, answerCount) {
    return answerCount >= total * 0.6;
}

if (isExamPassed(numberOfQuestions,correctAnswerCount)){
    alert(`zdałeś`);
} else {
    alert(`nie zdałeś`);
}

alert(`poprawnych odpowiedzi: ${correctAnswerCount},
    błędnych odpowiedzi: ${incorrectAnswerCount}`);

