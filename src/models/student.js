class Student {
    constructor(fullName = '', participationCount = 7, numberOfBeers = 0) {
        this.fullName = fullName;
        this.participationCount = participationCount;
        this.numberOfBeers = numberOfBeers;
    }
}

const codebrainersStudents = [
    new Student('Marek', 231, 9),
    new Student('Paulina', 10, 10),
    new Student('Sebastian', 7, 131),
    new Student('Bartek', 3, 13),
    new Student('Damian', 2, 11),
    new Student('Jonasz', 1, 24),
    new Student('Darek', 192, 77),
];

export { codebrainersStudents, Student };