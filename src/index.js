const names = [
    'Basia', 'Adrian', 'Jan', 'Paulina',
    'Jakub', 'Artur', 'Damian', 'Jarema',
    'Barnaba', 'Hermenegilda', 'Konstancja'
];

// Array of objects
const surnames = [
    // POJO = Plain Old Javascript Object
    {
        label: 'Kowalsk',
        isFlex: true,
    },
    {
        label: 'Nowak',
        isFlex: false,
    },
    {
        label: 'Pawlak',
        isFlex: false,
    },
    {
        label: 'Kwiatkowsk',
        isFlex: true,
    }
];


function filter(value) {
    return value.length > 0;
}

const filteredNames = names.filter(filter);

const isNameFemale = (name) => name.endsWith('a') && name !== 'Jarema' && name !== 'Barnaba';

// console.log(names, filteredNames);

const mapper = function (name, index) {
    const cyclicIndex = index % surnames.length;
    const surName = surnames[cyclicIndex];
    const isFlexSurname = surName.isFlex;

    let fullName = name + " " + surName.label;

    if (isFlexSurname) {
        fullName += isNameFemale(name) ? 'a' : 'i';
    }

    return fullName;
};

const fullNames = filteredNames.map(mapper);

console.log(fullNames);
