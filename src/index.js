// Homework  solution "borrowed" from Sebastian.

const names = [
    'Basia', 'Adrian', 'Jan', 'Paulina',
    'Jakub', 'Artur', 'Damian', 'Jarema',
    'Barnaba', 'Hermenegilda', 'Konstancja'
];

const surnames = ['Kowalsk', 'Nowak', 'Pawlak', 'Kwiatkowsk'];
const flexTable = [true, false, false, true];

function filter(value) {
    return value.length > 2;
}

const filteredNames = names.filter(filter);

const mapper = function (name, index) {
    let fullName;

    if (name.endsWith('a') && name !== 'Jarema' && name !== 'Barnaba'
        && flexTable[index % surnames.length]) {
        fullName = name + " " + surnames[index % surnames.length] + "a";
    } else if (flexTable[index % surnames.length]) {
        fullName = name + " " + surnames[index % surnames.length] + "i";
    } else {
        fullName = name + " " + surnames[index % surnames.length];
    }

    return fullName;
};

const fullNames = filteredNames.map(mapper);

console.log(fullNames);









