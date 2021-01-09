const names = ['Basia', 'Adrian', 'Jan', 'Paulina', 'Jakub', 'Artur', 'Damian', 'Jarema', 'Barnaba', 'Hermenegilda', 'Konstancja'];
const surnames = ['Kowalsk', 'Nowak', 'Pawlak', 'Kwiatkowsk'];
const flexTable = [true, false, false, true];

const filterNames = names;
console.log(names, filterNames);

const fullNames = filterNames.map(function (name, index) {
    let surnameIndex = index % surnames.length
    const fullName = name + " " + surnames[surnameIndex];

    let surnameLastChar;
    if (flexTable[surnameIndex] === true) {

        if (name.substr(-1, 1) === "a" && name !== "Barnaba" && name !== "Jarema") {
            surnameLastChar = "a"
        } else {
            surnameLastChar = "i"
        }

    } else {
        surnameLastChar = ""
    }

    return fullName + surnameLastChar;
});

console.log(fullNames);

//----------- female names only

const femaleNames = filterNames.map(function (name, index) {
    let surnameIndex = index % surnames.length
    let surnameLastChar;
    let femaleName;

    if (name.substr(-1, 1) === "a" && name !== "Barnaba" && name !== "Jarema") {
        femaleName = name + " " + surnames[surnameIndex];

        if(flexTable[surnameIndex] === true){
            surnameLastChar = "a";
        } else{
            surnameLastChar = "";
        }
    }

    return femaleName + surnameLastChar;
});

console.log(femaleNames);