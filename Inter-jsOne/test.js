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

// 23. Create a for...of loop to sum the numbers from 1 to 0

let sumofloop = 0;
for (let i = 0; i <= 10; i++) {
    sumofloop += i;
}
console.log("Sum of numbers from 1 to 10 using a for loop:", sumofloop); // Correct sum (55)

// 24. To create a for...of loop to log each character of the string "JavaScript"

let character_of_the_string = "JavaScript";

for (const [index, element] of Array.from(character_of_the_string).entries()) {
    console.log(`Index: ${index}, Character: ${element}`);
}

// 25. Write a for loop that skips even numbers between 1 and 20
// check the difference between "==" and "===" these operators

for (let index = 0; index < 21; index++) {
    if (index % 2 === 0) {// (!(index % 2 === 0)) then console.log(index); or index & 2 !== 0 then console.log(index);
        continue;
    }else{
        console.log("skips even numbers between 1 and 20",index);
        
    }
}

// 26. Use a do while loop that skips even number between 1 and 20

let num = 1;

do{

    if(num % 2 === 0){
        // console.log("num", ": ", num );

    }else{
        console.log("skips even number between 1 and 20", ": ", num );
    }

    num++;

}while (num <= 20);

// 26. Create a for loop that calculates the factorial of 5.

let fact = 1;

for (let i = 5; i > 0; i--) {
    fact = fact*i;
}

console.log("Factorial of 5",fact);

//  Write a nested loop to print a 3*3 grid of numbers;

/*
1 2 3
4 5 6
7 8 9
*/

var hold = 1;

//                -1
for (let i = 1; i < 4; i++) {// mandatory
    var str = ""
    for (let j = 1; j < 4; j++) {// mandatory

        // console.log(j);

        str += `${hold} `
        // str += hold 

        hold++

    }
    console.log("str: "+ str )// we could have created a loop for making a space between them.
    // console.log("str: "+ str + " ");
}

// 28. Use a for loop to reverse an array [1, 2, 3, 4].

let arrOf_integers = [1, 2, 3, 4]
/*
for (let i = 0; i < arrOf_integers.length; i++) {
    for (let j = 0; j < arrOf_integers.length - 1 - i; j++) {
        let temp = arrOf_integers[j]
        arrOf_integers[j] = arrOf_integers[j+1]
        arrOf_integers[j+1] = temp
    }
// This code does reverse the array, but accidentally and inefficiently.
}*/

for (let i = 0; i < arrOf_integers.length / 2; i++) {
    let temp = arrOf_integers[i]; // temporary array
    arrOf_integers[i] = arrOf_integers[arrOf_integers.length - 1 - i];// arrOf_integers.length - 1 is the last element, i is basically symbolising characters/elements so, in this line the last element is coming on the first half so then we need to check for the other ⬅ second last element for that we have to inverse reversely we simply used -i.
    arrOf_integers[arrOf_integers.length - 1 - i] = temp;
}// the question can be arise here is why did we had to create a temporary variable.

console.log(arrOf_integers);

let arrOf_Integers = [1, 2, 3, 4];

for (let index = 0; index < Math.floor(arrOf_Integers.length / 2); index++) {// Math.floor is optional here
    const temp = arrOf_Integers[index]; // we created a temporary variable so that we can freely modify the arrOf_Integers which is the original array 
    // this line will make the last elements come into the first
    // as you can see we actuallt modified the original array where we taking the elements from the last index
    // a question can arise here this single line can do it all why do we using of so many lines because this line single handedly reversing the order making the last elements to come in first for example [4, 3, 2, 1]
    arrOf_Integers[index] = arrOf_Integers[arrOf_Integers.length - index - 1]; // it doesnt make difference whether we take -i or -1 first
    // and.. here we are making the last element to go in first. It is same as like arrOf_Integers[arrOf_Integers.length - index - 1] = arrOf_Integers[index]. which is completely opposite of the line coming before it.
    arrOf_Integers[arrOf_Integers.length - index - 1] = temp; // and, then the first elements will come into the last positions
}// another question might arise is why we deviding the array by 2 we could have simply place the last elements in the first with the single line.

console.log(arrOf_Integers);
// console.log(arrOf_Integers.reverse);

let ArrOf_Integers = [1, 2, 3, 4];

let Arr_Of_Integers = ArrOf_Integers.reverse();
console.log(Arr_Of_Integers);


// Write a while loop that logs numbers from 1 to 100 devisible by 5.
let counter = 1;
while (counter <= 100) {

    // if ((counter / 5).equals(0)) {
    if (counter % 5 === 0) {// use modulus operator because we want the remainder.
        console.log(counter);
        // counter++
    }

    counter++

}

// 30. Make a for...in loop to iterate over an object and log its keys

var obj = {
    CapitalLetter_Alphabets: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    SmallLetter_Alphabets:  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    Special_Characters: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", "\\", ";", ":", "'", "\"", ",", ".", "/", "?", "<", ">", " "],
    Name: "Sumanta Bhattacharya",
    Phone_Num: 9957088374,
    College: {
        Name: "Maulana Abul Kalam Azad University of Technology",
        Semester: "VI",
        Roll_Num: 30001222180,
        Reg_No: 223001010781
    },
};

for (let key in obj) {
    console.log(key);
} 

// for (let key in obj.College[Name]) {
for (let key in obj.College) {
    /*
    console.log(key.valueOf()); 
    console.log(key[Name])
    console.log(key["*"]);*/

    console.log(key);
    
}

// 31. Create an array of your top 5 favorite movies and log it.

let array_of_Top_5_favoriteMovies = ["Krish", "Ra-One", "Sonic hadgehog", "Wild robot", "Lion King", "Avengers", "Gardients of galaxcy"];

/*for (let index = 0; index < array_of_Top_5_favoriteMovies.length; index++) {
    const element = array_of_Top_5_favoriteMovies[index];
    console.log(element);
}*/

/*array_of_Top_5_favoriteMovies.forEach((e)=>{
    console.log(e);
})*/

/*for (const element in array_of_Top_5_favoriteMovies) {
    console.log(element); // it gives the index of the array
}*/

for (const element of array_of_Top_5_favoriteMovies) {
    console.log("element: " + element);

}

// 32. Find and log the second element of an array
console.log("The second element of an array: " + array_of_Top_5_favoriteMovies[1]);

// 33. Add two elements to the start of an array using .unshift()

array_of_Top_5_favoriteMovies.unshift("Koye mil gaya");
array_of_Top_5_favoriteMovies.unshift("Heropanti")

console.log(array_of_Top_5_favoriteMovies);



// node "C:\Users\SUDIP BHATTACHARYA\Desktop\JS Interview-Q\Inter-jsOne\test.js"
// view "C:\Users\SUDIP BHATTACHARYA\Desktop\JS Interview-Q\Inter-jsOne\test.js" using to command we can see this whole file in the terminal