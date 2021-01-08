const names = [
    'Basia', 'Adrian', 'Jan', 'Paulina',
    'Jakub', 'Artur', 'Damian', 'Jarema',
    'Barnaba', 'Hermenegilda', 'Konstancja'
];

const surnames = ['Kowalsk', 'Nowak', 'Pawlak', 'Kwiatkowsk'];
const flexTable = [true, false, false, true];

function filter(value) {
    if (value.endsWith('a') & value !== "Barnaba" & value !== "Jarema"){
        return value;
    }
}

const filteredNames = names.filter(filter);

// console.log(names, filteredNames);

const mapper = function (name, index) {
    const fullName = name + " " + surnames[index % surnames.length];
    // console.log(name, index, surnames[index % surnames.length] , index % surnames.length);

    return fullName;
};

const fullNames = filteredNames.map(mapper);

console.log(fullNames);
