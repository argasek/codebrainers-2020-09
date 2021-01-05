function getRandomInteger() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomInteger());

const num1 = getRandomInteger();
const num2 = getRandomInteger();
const answer = parseInt(prompt(`Ile jest ${num1} * ${num2} ?`));
const result = num1 * num2;
console.log(num1, num2, result, answer);

if (answer === result) {
    alert('poprawnie');
} else {
    alert('błąd');
}






