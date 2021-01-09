const text = 'Ala ma kota, a kot ma psa';

const reverse = x => {
    let invertedString = '';
    for (let i = x.length - 1; i >= 0; i--) {
        invertedString += x[i];
    }
    return invertedString;
};

console.log(reverse(text));
