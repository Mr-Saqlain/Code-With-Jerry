let someNumber = 1

let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);

//********************************** Operations ************************************

let value = 8
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2/2);
// console.log(2-2);
// console.log(2*2);
// console.log(2%5); // Finding Reminder
// console.log(2**2); // ** Means Power of Number

let str1 = "hello "
let str2 = "world"

let str3 = str1 + str2
console.log(str3);

console.log("2" + 3 + 5); // Firt String Then It Will Be 235
console.log(2 + 3 + "5"); // Firt Number Then It Will Be 55 // ECMA
console.log("2" + "3");

// **********************************  Tricky Coversion ********************************

console.log(true);
console.log(+true); // True is Bolean, It Increment with 1.
// console.log(true+); // Not Possible TRUE+
console.log(+""); 

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3);

let gameCoutnter = 100
gameCoutnter++; // Prefix (Value Increment Firt), Postfix (Value Increase After)
console.log(gameCoutnter);



