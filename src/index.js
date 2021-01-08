const names = [
    'Basia', 'Adrian', 'Jan', 'Paulina',
    'Jakub', 'Artur', 'Damian', 'Jarema',
    'Barnaba', 'Hermenegilda', 'Konstancja'
];

const surnames = ['Kowalsk', 'Nowak', 'Pawlak', 'Kwiatkowsk'];
const flexTable = [true, false, false, true, true];

//---------filtrowanie imion kończących się na a`)--------

const femNames = names.filter(function (name) {
   return name[name.length -1] === "a";

});
console.log(`filtrowanie imion kończących się na a : `)
console.log(femNames);

//--------------------------------------------------------------------------------------------------------


//---------Usunięcie imion męskich kończących się na "a"------------------------------------------------

const femNamesUpdated = femNames.filter (function(name){
    return name !== "Barnaba" & name !== "Jarema";

})
console.log(` Usunięcie imion męskich kończących się an "a"`);

console.log(femNamesUpdated);

//------------------------------------------------------------------------------------------------------

//---- Przypisanie wartości boolean do listy nazwisk - wykorzystanie mapy-----------------------------

const surNew = function (surname, index) {
    const boolSurname = surname + ":" + flexTable[index % flexTable.length];
    return boolSurname;

};
const boolSurnames = surnames.map(surNew);
console.log(`Przypisanie wartości boolean do listy nazwisk - wykorzystanie mapy `);
console.log(boolSurnames);

//-----------------------------------------------------------------------------------------------------

//------Przypisanie do wszytskich imion nazwisk z wartościami boolean-----------------------------------

const namesNew = function (fullName, index){
    const fullNameNew = fullName +" "+ boolSurnames[index % boolSurnames.length];
    return fullNameNew;
};
const fullNamesNew= names.map(namesNew);
console.log(`Przypisanie do wszytskich imion nazwisk z wartościami boolean `);
console.log(fullNamesNew);

//-------------------------------------------------------------------------------------------------

//------Przypisanie do wszytskich imion żeńskich nazwisk z wartościami boolean---------------------------

const femNamesNew = function (femName, index){
    const fullFemName = femName +" "+ boolSurnames[index % boolSurnames.length];
    return fullFemName;
};
const fullFemNames = femNamesUpdated.map(femNamesNew);
console.log(`Przypisanie do wszytskich imion żeńskich  nazwisk z wartościami boolean `);
console.log(fullFemNames);
//---------------------------------------------------------------------------------------------------------------------



const mapper = function (name, index) {
    const fullName = name + " " + surnames[index % surnames.length];
    return fullName;
};
const fullNames = names.map(mapper);
console.log(fullNames);





// In 8 hours work, didn't find the way to solve all of this... i give up:////











