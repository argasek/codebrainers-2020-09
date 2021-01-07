const names = ['Basia', 'Adrian', 'Jan', 'Paulina', 'Jakub', 'Artur', 'Damian', 'Hermenegilda', 'Konstancja'];
const surnames = ['Kowalsk', 'Nowak', 'Pawlak', 'Kwiatkowsk'];
const flexTable = [true, false, false, true];

// const filteredNames = names.filter(function (value) {
//     return value.length > 5;
// });
const filteredNames = names;
console.log(names, filteredNames);

const fullNames = filteredNames.map(function (name, index) {
    const fullName = name + " " + surnames[index % surnames.length];
    // console.log(name, index, surnames[index % surnames.length] , index % surnames.length);


    return fullName;
})

console.log(fullNames);
