const names = [
    'Basia', 'Adrian', 'Jan', 'Paulina',
    'Jakub', 'Artur', 'Damian', 'Jarema',
    'Barnaba', 'Hermenegilda', 'Konstancja'
];

const surnames = ['Kowalsk', 'Nowak', 'Pawlak', 'Kwiatkowsk'];
const flexTable = [true, false, false, true];

// function filter(value) {
//     return value.length > 5;
// }

// const filteredNames = names.filter(filter);

// console.log(names, filteredNames);

const mapper = function (name, index) {
    // const fullName = name + " " + surnames[index % surnames.length];
    let fullName;

    if (flexTable[index % surnames.length]) {
        if(name.endsWith('a')){
        fullName = name + " " + surnames[index % surnames.length] + "a";}else{
          fullName = name + " " + surnames[index % surnames.length]+ "i";
        }
    } else {
        fullName = name + " " + surnames[index % surnames.length];
    }

    // console.log(name, index, surnames[index % surnames.length] , index % surnames.length);

    return fullName;


};

const fullNames = names.map(mapper);

console.log(fullNames);

