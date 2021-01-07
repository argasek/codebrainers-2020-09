const names = [ 'Basia', 'Adrian', 'Jan', 'Paulina', 'Jakub', 'Artur', 'Damian', 'Hermenegilda' ];
const surnames= ['Kowalsk', 'Nowak', 'Pawlak', 'Kwiatkowsk'];
const flexTable = [true, false, false, true];

const filteredNames = names.filter(function (value) {
    return value.length > 5;
});

console.log(names, filteredNames);
