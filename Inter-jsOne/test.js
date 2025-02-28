// 1.log your name and favorite hobby to the console.
console.log("SUMANTA","WRITING THOUGHT");

// 2. Perform and log the result of 45 * 2 - 10
console.log(45 * 2 - 10); // 90 - 10 = 80

// 3. Use console.log() to display the current year.
/*
const currentYear = new Date().getFullYear();
console.log("Current Year:", currentYear);
*/
const currDate = new Date()
console.log("Current Year:",currDate.getFullYear())

// 4. Create two variables for first and last name, Concatenate and log them
first_name = "SUMANTA"
last_name = "BHATTACHARAYA"
console.log(first_name + " " + last_name);

// 5. Track the value of a variable by logging it before and after updating.
let sixty_Nine = 69;
console.log(sixty_Nine);
sixty_Nine = 70;
console.log("69 plus 1 equals to:" ,sixty_Nine);

// 6. Use console.error() to simulate an error message
console.error("This is an error message");

// 7. Use console.warn() to simulate a warning message
console.warn("This is an warn message")

// 8. Log the square of the number 12 to the console
console.log(12*2);

// 9. Log the square of the any number to the console
// let val = 12;
// let sqaure = new Math.sqrt(val)
// console.log(sqaure);

// 10. Print the type of a variable holding the value true.
let varTrue = true
console.log(typeof(varTrue));

// 11.  Create a variable holding your age and log whether its greater than 18 or not
var varAge = "21";
if (varAge > 18) {
    console.log("You're now an adult");
}else{
    console.log("You're still a kid"); 
}

// 12. Log the result of 100 / 0 and observe the output
console.log(100/0);

// 2. Variables and Data Types (10 Questions)

// 13. Declare a Variable using let and log its value.
let VarVal = 69;
console.log(VarVal);

// 14. Create a constant to store the value of PI and log it.
const PI = Math.PI;
console.log(PI);

// 15. Reassign a value to a vraible declared with let and log the result 
let varName = "SAMANTA"
varName = "SUDIP"
console.log(varName);

// 16. Check the type of null and log it
let varNull = null //object
console.log(typeof(varNull));

console.log(null === null);
console.log(NaN === NaN);
console.log(typeof(NaN));// number


// 17. Create a variable with a number as a string 
var varSistyNine = "69"
console.log(typeof(varSistyNine));

// 18. Use Typeof to check the type of a boolean variable.
var varBool = true;
console.log(typeof(varBool));

// 19. Create three variables of types string, number, and boolean, and log their value.
var varS = "SUMANTA BHATTACHARYA"
var varN = 180
var varB = false
// var varS = "SUMANTA BHATTACHARYA",varN = 180, varB = false
console.log(varS,",",varN,",",varB);

// 20. Declare a variable without assigning a value. Log its type.
var undef; // Bydefault its always assigned to undefined
console.log(undef);// undefined is an actual value in js
console.log(typeof(undef));

// 21. Create a variable with undefined and log its type.
let varUn = undefined;
console.log(varUn);



// 22. Use const to create an array. Try reassigning the array and observe the error.
let arr = []; // we cannot reassign but we can update
// If you need key-value pairs, use an object ({}) instead of an array ([]):
// pop() doesn't remove string keys because it only affects numeric indices, Since "NAME" and "ROLL" are not numeric indices, pop() does nothing.
arr["NAME"] = "SUMANTA BHAT";
arr["ROLL"] = 30001222180;

console.log(arr["NAME"]);

// arr.pop()
arr.push("John");
arr.push({ name: "Sumanta" });
Object.assign(arr, { COLLEGE: "MAKAUT" });
arr.shift();
arr.splice(0, 1);
arr[0] = "John";
// delete arr["NAME"];
delete arr["ROLL"];
console.log(arr); // Now the properties are removed

// Creating an associative array using an object
let associativeArray = {};//Objects don't have pop(), push(), shift(), or splice() methods because they are not indexed collections like arrays.
// Use delete to remove properties from an object.

// Adding key-value pairs
associativeArray["NAME"] = "SUMANTA BHATTACHARYA";
associativeArray["REG"] = 223001010781;
associativeArray["CITY"] = "KALKATTA";

// Accessing values
console.log(associativeArray["NAME"]); // Output: John

// Iterating over the associative array
for (let key in associativeArray) {
    console.log(key + ": " + associativeArray[key]);
}

delete associativeArray["CITY"]; // Removes "CITY" from the object
console.log(associativeArray);

let myMap = new Map();
myMap.set("name", "ANITA");
myMap.set("roll", 30001222181);

console.log(myMap.get("name")); // ✅ Output: John
console.log(myMap);

// 21. Write a for loop to print numbers from 1 to 50.
for (let i = 1; i <= 50; i++) {
    console.log(i);
    //process.stdout.write(i + " ");// ReferenceError: process is not defined because process.stdout.write() is specific to Node.js, and running this script in a browser (where process is not available).
}

console.log([...Array(50)].map((_, i) => i + 1).join(" "));

// 22. Use a while loop to sum the numbers from 1 to 10.
let sum = 0;
for (let i = 1; i <= 10; i++) {
    // let sum = 0; // ✅ sum is re-declared in each iteration, Once the loop ends, sum no longer exists outside the loop.
    sum += i; // sum will always start from 0
    console.log(sum);// sum does not accumulate; it resets to 0 in each iteration.
}
console.log("Sum:", sum);

let total = 0;
let sumoftotal = 0; // To store sumoftotal

while (total < 10) {  // Runs until total reaches 10
    total += 1; 
    sumoftotal += total;
}

console.log("total:", sumoftotal); // Correct sum (55)
console.log(1+2+3+4+5+6+7+8+9+10);  

// | Iteration | `total` Before | `total += 1` (Increment) | `total` After | `sum` Before | `sum += total` (Add) | `sum` After |
// |-----------|---------------|--------------------------|--------------|--------------|-----------------|--------------|
// | 1         | 0             | `0 + 1` = 1              | 1            | 0            | `0 + 1` = 1     | 1            |
// | 2         | 1             | `1 + 1` = 2              | 2            | 1            | `1 + 2` = 3     | 3            |
// | 3         | 2             | `2 + 1` = 3              | 3            | 3            | `3 + 3` = 6     | 6            |
// | 4         | 3             | `3 + 1` = 4              | 4            | 6            | `6 + 4` = 10    | 10           |
// | 5         | 4             | `4 + 1` = 5              | 5            | 10           | `10 + 5` = 15   | 15           |
// | 6         | 5             | `5 + 1` = 6              | 6            | 15           | `15 + 6` = 21   | 21           |
// | 7         | 6             | `6 + 1` = 7              | 7            | 21           | `21 + 7` = 28   | 28           |
// | 8         | 7             | `7 + 1` = 8              | 8            | 28           | `28 + 8` = 36   | 36           |
// | 9         | 8             | `8 + 1` = 9              | 9            | 36           | `36 + 9` = 45   | 45           |
// | 10        | 9             | `9 + 1` = 10             | 10           | 45           | `45 + 10` = 55  | 55           |



let numoftotal = 1;
let sumOftotal = 0;
while (numoftotal<=10) {
    sumOftotal += numoftotal;
    numoftotal++;
}    

console.log("Sum of numbers from 1 to 10 using a while loop:", sumOftotal); // Correct sum (55)




