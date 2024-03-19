const name = "Saqlain"
const repo = 10

// console.log(name + repo); // Contantinate Variables with +.

console.log(`My name is ${name} and my repo count is ${repo}`); // Modern Way Syntax.

const gameName = new String('PUBG-Saqlain')

console.log(gameName.length); // Console Steing Lenght.
console.log(gameName.toLowerCase()); // String Small
console.log(gameName.toUpperCase()); // String Capital
console.log(gameName.toString()); // Console Full string.
console.log(gameName.charAt(3)); // Which CharAt On 3rd number.
console.log(gameName.indexOf('U')); // Which Alpha On number.

const newString = gameName.substring(0, 7)    // Console Range String
console.log(newString);

const anotherString = gameName.slice(-11, 6)   // In Slice we can add Negitive Value.
console.log(anotherString);

const oneString = "  Saqlain  "
console.log(oneString);
console.log(oneString.trim());    // Trim Use to Remove Extra Spaces



const url = "https://github.com/hitesh%20choudhary"    // Replace Syntax
console.log(url.replace('%20' , '-'));
console.log(url.includes('github'));     // Check Word Availibilty in String