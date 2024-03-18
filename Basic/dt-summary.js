// Premitive - Call by Value (7 Types)

// String,  Number, Boolean, Null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.45

const isLoggedIn = false
const outTemp = null
let userEmail; // undefined

const Id = Symbol('00971')
const anotherId = Symbol('00971')

console.log(Id === anotherId);

const bigNumber = 67867836287682676688n

console.log(bigNumber);


// Reference Type (Non-Premetive) 

// Arrays, Objects, Functions

const heros = ["Tony", "Witch", "Hulk"]; // Array

let myObj = {

    name: "Saqlain",
    Age: 20,
}

const myFunction = function(){
    console.log("Hello Jerry");
}

console.log(typeof heros);

// ***********************************************************************

// Stack (Primitive - Copy) , Heap (Non-Premitive - Refernce)

let myName = "CodeWithJerry"

let anotherName = myName
anotherName = "ChaiKiAshiq"

console.log(myName);
console.log(anotherName);

let UserOne = {
    email: "user@gmail.com",
    id: "ghg@upi.com"
}

let UserTwo = UserOne

UserTwo.email = "saq@gmail.com"

console.log(UserOne.email);
console.log(UserTwo.email);