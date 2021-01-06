const numberOfQuestions = 4;
const arrCor = [];
const arrInCor = [];

function getRandomInteger() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomInteger());
let correctAnswerCount = 0;
let incorrectAnswerCount = 0;

for (let i = 0; i < numberOfQuestions; i++) {
    const num1 = getRandomInteger();
    const num2 = getRandomInteger();
    // const answer = parseInt(prompt(`Ile jest ${num1} * ${num2} ?`));
    const result = num1 * num2;
    let answer;
    while (isNaN(answer)) {
        answer = parseInt(prompt(`Ile jest ${num1} * ${num2} ?`));

    }

    console.log(num1, num2, result, answer);

    if (answer === result) {
        correctAnswerCount++;
        arrCor.push(answer);
    }else{
        arrInCor.push(answer);
    }
}
incorrectAnswerCount = numberOfQuestions - correctAnswerCount;
console.log(correctAnswerCount);
console.log(incorrectAnswerCount);


function isExamPassed(total, answerCount) {
    return answerCount >= total * 0.6;
}

if (isExamPassed(numberOfQuestions, correctAnswerCount)) {
    alert(`Congratulations! You passed!
     Your score is:
       ${correctAnswerCount} correct answers
       ${numberOfQuestions - correctAnswerCount} wrong answers.`);

} else {
    alert(`Oh no! You failed!
     Your score is:
       ${correctAnswerCount} correct answers
       ${numberOfQuestions - correctAnswerCount} wrong answers.`);}

console.log('User correct responses ' + arrCor.join(', '));
console.log('User incorrect responses ' + arrInCor.join(', '))