// Array of objects
const students = [
    // POJO = Plain Old Javascript Object
    {
        age: 20,
        boozeUnits: 0,
        label: 'Marek',
    },
    {
        age: 18,
        boozeUnits: 0,
        label: 'Paulina',
    },
    {
        age: 16,
        boozeUnits: 0,
        label: 'Darek',
    },
    {
        age: 66,
        boozeUnits: 0,
        label: 'Sebastian',
    },
    {
        age: 70,
        boozeUnits: 0,
        label: 'Bartek',
    },
    {
        age: 100,
        boozeUnits: 0,
        label: 'Damian',
    },
    {
        age: 3,
        boozeUnits: 0,
        label: 'Jonasz',
    },
    {
        age: 39,
        boozeUnits: 0,
        label: 'Jakub',
    },
];

// const initialValue = 0;

const comparator = (studentA, studentB) => {
    if(studentA.label < studentB.label) {
        return -1;
    } else if (studentA.label === studentB.label) {
        return 0;
    } else {
        return 1;
    }
};

const namesSortedByAge = students
    .sort(comparator)
    .map(student => student.label);
    // .reduce((sumOfAges, age) => sumOfAges + age, initialValue) / students.length;

console.log(namesSortedByAge);


//skrócona wersja zapisu sortowania z wykorzystaniem "comparatora" na przykładzie tablicy liczb.

const numbers =[5,6,7,1,9].sort((a,b)=> a-b);
console.log(numbers);

