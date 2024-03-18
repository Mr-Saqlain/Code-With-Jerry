let score = 33 // Can add T/F, "123ABC", Undifiend, etc instead of 33.

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber); // Sprcial Type

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0


let isLoggedIn = "Saqo"

let BooleanisLoggedIn = Boolean(isLoggedIn)
console.log(BooleanisLoggedIn); // Coverion Boolean

// 1 => true
// 0 => false
// "" => true
// "ghg" => true

let someNumber = 33

let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);