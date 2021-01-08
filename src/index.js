const names = [
    'Basia', 'Adrian', 'Jan', 'Paulina',
    'Jakub', 'Artur', 'Damian', 'Jarema',
    'Barnaba', 'Hermenegilda', 'Konstancja'
];

const surnames = ['Kowalsk', 'Nowak', 'Pawlak', 'Kwiatkowsk'];
const flexTable = [true, false, false, true];


function filterGender(value) {
    if(value.endsWith('a') && value !== 'Jarema' && value !=='Barnaba'){
        return value;
    }

}
//supposedly using endsWith don't work on IE browsers, but who uses them anyway.
const feminineNames = names.filter(filterGender);



const mapper = function (name, index) {
    // const fullName = name + " " + surnames[index % surnames.length];
    let fullName;

    if (flexTable[index % surnames.length]) {
        if(name.endsWith('a')){
        fullName = name + " " + surnames[index % surnames.length] + "a";
        }else{
          fullName = name + " " + surnames[index % surnames.length]+ "i";
        }
    } else {
        fullName = name + " " + surnames[index % surnames.length];
    }

    // console.log(name, index, surnames[index % surnames.length] , index % surnames.length);

    return fullName;


};

const fullNames = feminineNames.map(mapper);

console.log(fullNames);




