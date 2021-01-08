const numberOfQuestions = 10;

function getRandomInteger() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomInteger());
let correctAnswerCount = 0;
let incorrectAnswerCount = 0;

for (let i = 0; i <numberOfQuestions; i++) {
    const num1 = getRandomInteger();
    const num2 = getRandomInteger();
    // console.log(num1, num2, result, answer);
    let answer;
    do {
        answer = parseInt(prompt(`Ile jest ${num1} * ${num2} ?`));
        if (isNaN(answer)){
        alert('Give a number!')}
    } while (isNaN(answer));


    const result = num1 * num2;

    if (answer === result) {
        correctAnswerCount++;
    } else {
        incorrectAnswerCount++;
    }
}

incorrectAnswerCount = numberOfQuestions - correctAnswerCount;
console.log(correctAnswerCount);
console.log(incorrectAnswerCount);


function isExamPassed(total, answerCount) {
    return answerCount >= total * 0.6;
}
if (isExamPassed(numberOfQuestions,correctAnswerCount)){
    alert(`U gave ${correctAnswerCount} correct Answers. Congratulation u passed!`);

} else {
    alert(`U gave ${incorrectAnswerCount} bad answers. Sorry u failed :(`);
}

