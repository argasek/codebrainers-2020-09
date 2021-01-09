// Array of objects
const students = [
    // POJO = Plain Old Javascript Object
    {
        age: 20,
        boozeUnits: 0,
        name: 'Marek',
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



function ageReducer(sumOfAges, age) {
    console.log(`sumOfAges: ${sumOfAges}, age: ${age}, sumOfAges + age = ${sumOfAges + age}`);
    return sumOfAges + age;
}

const ages = students
    .map(student => student.age);

console.log(ages);
console.log('-----------------------------')

const initialValue = 0;
const x = ages.reduce(ageReducer, initialValue);
console.log('-----------------------------')

console.log(x);
