const numberOfQuestions = 3;

function getRandomInteger() {
    return Math.floor(Math.random() * 10) + 1;
}

let correctAnswerCount = 0;
let incorrectAnswerCount = 0;
let repeatedQuestion;
let allQuestionsCount ;
allQuestionsCount = 0;

let number1;
let number2 ;




for (let i = 0; i <numberOfQuestions; i++) {
    const num1 = getRandomInteger();
    const num2 = getRandomInteger();

    const result = num1 * num2;
    let questionsRoundCount;
    questionsRoundCount=0;


    do{
        const answer = prompt(`Question ${i + 1 } of ${numberOfQuestions}. Multiply numbers:  ${num1} x ${num2} :`);
        repeatedQuestion = parseInt(answer);

        if (isNaN(parseInt(answer))) {
            alert('Your answer is not a valid value. Please use integer value.');
        }
        questionsRoundCount++



    } while ( repeatedQuestion !== result);

    allQuestionsCount++;
    // number1=num1;
    // number2=num2;


    console.log(`Multiplication of: ${num1} x ${num2} = ${ result }, Your answer is: ${repeatedQuestion}, 
    and you gave correct answer after ${questionsRoundCount} time.`);

    if (repeatedQuestion===result) {
        correctAnswerCount++;
    }

}

incorrectAnswerCount = allQuestionsCount - correctAnswerCount;

console.log(`All questions: ${allQuestionsCount}`);
console.log(`Correct answers: ${correctAnswerCount}`);
console.log(`Incorrect: ${incorrectAnswerCount}`);
// console.log(`number1: ${number1}`);
// console.log(`number2: ${number2}`);


function isExamPassed(total, answerCount){
    return answerCount >= 0.6 * total;
}
if (isExamPassed(allQuestionsCount, correctAnswerCount)){
    alert(`Well Done! You passed! Given ${allQuestionsCount} questions, you answered correctly for ${correctAnswerCount} of them, which is ${Math.ceil((correctAnswerCount/allQuestionsCount)*100)} % of all questions. `);
} else {
    alert(`Sorry, you didn't succeed! You needed at least 60% of correct answers. Given ${allQuestionsCount} questions, you answered correctly for ${correctAnswerCount} of them, which is ${Math.ceil((correctAnswerCount/allQuestionsCount)*100)} % of all questions`);
}


















