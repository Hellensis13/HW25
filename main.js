// ex. 2

let substantiv = "pig";
substantiv = substantiv.toLowerCase();
let numarul = 3;
const plural = function(numarul, substantiv){
if (substantiv === "pig" || substantiv === "hamster" || substantiv === "parrot"){
    if (numarul === 1 || numarul === 0){
        console.log(`I have ${numarul} ${substantiv}.`);
    } else {
        console.log(`I have ${numarul} ${substantiv}s.`)
    };
}
if (substantiv === "sheep"){
    if (numarul === 1 || numarul === 0){
        console.log(`I have ${numarul} sheep.`)
    } else {
        console.log(`I have ${numarul} sheep.`)
    };
}
if (substantiv === "goose" || substantiv === "geese"){
    if (numarul === 1 || numarul === 0){
        console.log(`I have ${numarul} goose.`)
    } else {
        console.log(`I have ${numarul} geese.`)
    };
}
};

plural(7, 'pig');
plural(1, "hamster");
plural(0, "parrot");
plural(2, "goose");
plural(4, "sheep")

// ex. 4

let name;
let birthYear;
let isF = false;//true if female, false if male

const calculateAge = function(birthYear){
    return 2024 - birthYear;
};

const retirementAge = function(isF) {
   return isF ? 64 : 67;
}
function retirementInfo(name, birthYear, isF){
    let age = calculateAge(birthYear);
    let retireAge = retirementAge(isF);

    if (age >= retireAge){
        return `${name} este deja la pensie.`;
    } else {
        let yearsLeft = retireAge - age;
        let minorStatus = age < 18 ? "este minor." : "este adult.";
        console.log(`${name} mai are ${yearsLeft} ani pana la pensionare. `);
    }
    
}

retirementInfo('Sergiu', 1979, false);
retirementInfo('Anastasia', 1963, true);
retirementInfo('Andreea', 2010, true);

