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

let sumOfAges = 0;
for (let i = 0; i < students.length; i++) {
    const age = students[i].age;
    sumOfAges += age;
}

const averageAge = sumOfAges / students.length;
console.log(sumOfAges, averageAge);