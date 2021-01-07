const names = [ 'Basia', 'Adrian', 'Jan', 'Paulina', 'Jakub', 'Artur', 'Damian', 'Hermenegilda' ];

console.log('------------- for loop -------------------');

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('------------- loop via forEach and anonymous function -------------------');

names.forEach(function (value) {
    console.log(value);
});

console.log(names);

console.log('------------- filter() demonstration -------------------');

const onlyNamesLongerThan5Letters = names.filter(function (name) {
    return name.length === 5;
});

console.log(onlyNamesLongerThan5Letters);

console.log('------------- map() demonstration -------------------');

const mapper = function (name) { return `${name} Nowak`; };
const printer = function (fullName) { console.log(fullName); };

// chain
// method chaining
const namesWithNowakFullNames = names.map(mapper).forEach(printer);

console.log(namesWithNowakFullNames)