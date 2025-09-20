// 1.log your name and favorite hobby to the console.
console.log("SUMANTA", "WRITING THOUGHT");

// 2. Perform and log the result of 45 * 2 - 10
console.log(45 * 2 - 10); // 90 - 10 = 80

// 3. Use console.log() to display the current year.
/*
const currentYear = new Date().getFullYear();
console.log("Current Year:", currentYear);
*/
const currDate = new Date();
console.log("Current Year:", currDate.getFullYear());

// 4. Create two variables for first and last name, Concatenate and log them
first_name = "SUMANTA";
last_name = "BHATTACHARAYA";
console.log(first_name + " " + last_name);

// 5. Track the value of a variable by logging it before and after updating.
let sixty_Nine = 69;
console.log(sixty_Nine);
sixty_Nine = 70;
console.log("69 plus 1 equals to:", sixty_Nine);

// 6. Use console.error() to simulate an error message
console.error("This is an error message");

// 7. Use console.warn() to simulate a warning message
console.warn("This is an warn message");

// 8. Log the square of the number 12 to the console
console.log(12 * 2);

// 9. Log the square of the any number to the console
// let val = 12;
// let sqaure = new Math.sqrt(val)
// console.log(sqaure);

// 10. Print the type of a variable holding the value true.
let varTrue = true;
console.log(typeof varTrue);

// 11.  Create a variable holding your age and log whether its greater than 18 or not
var varAge = "21";
if (varAge > 18) {
  console.log("You're now an adult");
} else {
  console.log("You're still a kid");
}

// 12. Log the result of 100 / 0 and observe the output
console.log(100 / 0);

// 2. Variables and Data Types (10 Questions)

// 13. Declare a Variable using let and log its value.
let VarVal = 69;
console.log(VarVal);

// 14. Create a constant to store the value of PI and log it.
const PI = Math.PI;
console.log(PI);

// 15. Reassign a value to a vraible declared with let and log the result
let varName = "SAMANTA";
varName = "SUDIP";
console.log(varName);

// 16. Check the type of null and log it
let varNull = null; //object
console.log(typeof varNull);

console.log(null === null);
console.log(NaN === NaN);
console.log(typeof NaN); // number

// 17. Create a variable with a number as a string
var varSistyNine = "69";
console.log(typeof varSistyNine);

// 18. Use Typeof to check the type of a boolean variable.
var varBool = true;
console.log(typeof varBool);

// 19. Create three variables of types string, number, and boolean, and log their value.
var varS = "SUMANTA BHATTACHARYA";
var varN = 180;
var varB = false;
// var varS = "SUMANTA BHATTACHARYA",varN = 180, varB = false
console.log(varS, ",", varN, ",", varB);

// 20. Declare a variable without assigning a value. Log its type.
var undef; // Bydefault its always assigned to undefined
console.log(undef); // undefined is an actual value in js
console.log(typeof undef);

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
let associativeArray = {}; //Objects don't have pop(), push(), shift(), or splice() methods because they are not indexed collections like arrays.
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
  console.log(sum); // sum does not accumulate; it resets to 0 in each iteration.
}
console.log("Sum:", sum);

let total = 0;
let sumoftotal = 0; // To store sumoftotal

while (total < 10) {
  // Runs until total reaches 10
  total += 1;
  sumoftotal += total;
}

console.log("total:", sumoftotal); // Correct sum (55)
console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);

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
while (numoftotal <= 10) {
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
  if (index % 2 === 0) {
    // (!(index % 2 === 0)) then console.log(index); or index & 2 !== 0 then console.log(index);
    continue;
  } else {
    console.log("skips even numbers between 1 and 20", index);
  }
}

// 26. Use a do while loop that skips even number between 1 and 20

let num = 1;

do {
  if (num % 2 === 0) {
    // console.log("num", ": ", num );
  } else {
    console.log("skips even number between 1 and 20", ": ", num);
  }

  num++;
} while (num <= 20);

// 26. Create a for loop that calculates the factorial of 5.

let fact = 1;

for (let i = 5; i > 0; i--) {
  fact = fact * i;
}

console.log("Factorial of 5", fact);

//  Write a nested loop to print a 3*3 grid of numbers;

/*
1 2 3
4 5 6
7 8 9
*/

var hold = 1;

//                -1
for (let i = 1; i < 4; i++) {
  // mandatory
  var str = "";
  for (let j = 1; j < 4; j++) {
    // mandatory

    // console.log(j);

    str += `${hold} `;
    // str += hold

    hold++;
  }
  console.log("str: " + str); // we could have created a loop for making a space between them.
  // console.log("str: "+ str + " ");
}

// 28. Use a for loop to reverse an array [1, 2, 3, 4].

let arrOf_integers = [101, 180, 181, 420];
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
  arrOf_integers[i] = arrOf_integers[arrOf_integers.length - 1 - i]; // arrOf_integers.length - 1 is the last element, i is basically symbolising characters/elements so, in this line the last element is coming on the first half so then we need to check for the other ⬅ second last element for that we have to inverse reversely we simply used -i.
  arrOf_integers[arrOf_integers.length - 1 - i] = temp;
} // the question can be arise here is why did we had to create a temporary variable.

console.log(arrOf_integers);

let arrOf_Integers = [1, 2, 3, 4];

for (let index = 0; index < Math.floor(arrOf_Integers.length / 2); index++) {
  // Math.floor is optional here
  const temp = arrOf_Integers[index]; // we created a temporary variable so that we can freely modify the arrOf_Integers which is the original array
  // this line will make the last elements come into the first
  // as you can see we actuallt modified the original array where we taking the elements from the last index
  // a question can arise here this single line can do it all why do we using of so many lines because this line single handedly reversing the order making the last elements to come in first for example [4, 3, 2, 1]
  arrOf_Integers[index] = arrOf_Integers[arrOf_Integers.length - index - 1]; // it doesnt make difference whether we take -i or -1 first
  // and.. here we are making the last element to go in first. It is same as like arrOf_Integers[arrOf_Integers.length - index - 1] = arrOf_Integers[index]. which is completely opposite of the line coming before it.
  arrOf_Integers[arrOf_Integers.length - index - 1] = temp; // and, then the first elements will come into the last positions
} // another question might arise is why we deviding the array by 2 we could have simply place the last elements in the first with the single line.

console.log(arrOf_Integers);
// console.log(arrOf_Integers.reverse);

let ArrOf_Integers = [420, 69, 68, 101, 30001222180, 223001010781];

let Arr_Of_Integers = ArrOf_Integers.reverse();
console.log(Arr_Of_Integers);

// Write a while loop that logs numbers from 1 to 100 devisible by 5.
let counter = 1;
while (counter <= 100) {
  // if ((counter / 5).equals(0)) {
  if (counter % 5 === 0) {
    // use modulus operator because we want the remainder.
    console.log(counter);
    // counter++
  }

  counter++;
}

// 30. Make a for...in loop to iterate over an object and log its keys

var obj = {
  CapitalLetter_Alphabets: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  ],
  SmallLetter_Alphabets: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  ],
  Special_Characters: ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","]","{","}","|","\\",";",":","'",'"',",",".","/","?","<",">"," ",
  ],
  Name: "Sumanta Bhattacharya",
  Phone_Num: 9957088374,
  College: {
    Name: "Maulana Abul Kalam Azad University of Technology",
    Semester: "VI",
    Roll_Num: 30001222180,
    Reg_No: 223001010781,
  },
};
// Q. what would i have if i had to iterate over the values not just keys. suppose print each letter of the name
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

let array_of_Top_5_favoriteMovies = [
  "Krish",
  "Ra-One",
  "Sonic hadgehog",
  "Wild robot",
  "Lion King",
  "Avengers",
  "Gardients of galaxcy",
];

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
  console.log("5 favorite movies: " + element);
}

// 32. Find and log the second element of an array
console.log(
  "The second element of an array: " + array_of_Top_5_favoriteMovies[1]
);

// 33. Add two elements to the start of an array using .unshift()

array_of_Top_5_favoriteMovies.unshift("Koye mil gaya");
array_of_Top_5_favoriteMovies.unshift("Heropanti");

console.log(array_of_Top_5_favoriteMovies);

// 34. Remove the last element of an array and log the updated array.

// array_of_Top_5_favoriteMovies.pop();
// console.log("Remove the last element of an array: " + array_of_Top_5_favoriteMovies);

console.log(
  "Remove the last element of an array: " + array_of_Top_5_favoriteMovies.pop()
); // it actually makes changes in the original array

// 35. Use .slice() to extract the first three element of an array.

// array_of_Top_5_favoriteMovies.slice(0,1)
// console.log("extract the first three element of an array: " + array_of_Top_5_favoriteMovies);

// array_of_Top_5_favoriteMovies = array_of_Top_5_favoriteMovies.slice(0, -1);
// console.log("Remove the last element of an array: " + array_of_Top_5_favoriteMovies);

console.log(
  "Extract the first three element of an array: " +
    array_of_Top_5_favoriteMovies.slice(0, 1)
); // it does'nt make changes with the original array.
// question: suppose we had to slide all the elements 0 to nth term then what how we would have proceed with the code then we would have keep the last index empty

// it just copy the elements and create a seperate array
console.log(array_of_Top_5_favoriteMovies);

// 36. Find the index of a specific element in an array using .indexOf()

let index_of_a_specific_element_in_an_array =
  array_of_Top_5_favoriteMovies.indexOf("Ra-One");
console.log(
  "index of a specific element in an array: " +
    index_of_a_specific_element_in_an_array
);

// 37. Check if a value exists in an array using .includes()

let value_exists_in_an_array = array_of_Top_5_favoriteMovies.includes("Ra-One");
console.log("value exists in an array: " + value_exists_in_an_array);

// 38. Cobine two arrays using .concat()
let Cobine_two_arrays = array_of_Top_5_favoriteMovies.concat(ArrOf_Integers);
console.log("Cobine two arrays" + Cobine_two_arrays);

// console.log(Cobine_two_arrays.Math.set());

// Sort an array of numbers in assending order
// Q. how to sort in decending order?
console.log(array_of_Top_5_favoriteMovies.sort()); // it make changes with the actual array
// console.log("array_of_Top_5_favoriteMovies: " , array_of_Top_5_favoriteMovies);

// console.log( "2/3 ? 0 : 22" + 2/3 ? 0 : 22);
// array_of_Top_5_favoriteMovies.sort() === true ? console.log("Array is sorted") : console.log("Array is'nt sorted");

let ArrayOf_Integers = [69, 68, 30001222180, 223001010781, 420, 143];

if (ArrayOf_Integers.sort === 1) {
  // true
  console.log("Array is already sorted");
} else {
  for (let index = 0; index < ArrayOf_Integers.length; index++) {
    // const element = array[index];
    // firstly, we need to check if the array is already sorted or not.
    for (let j = 0; j < ArrayOf_Integers.length - 1; j++) {
      // we are comaparing here, in the inner loop
      if (ArrayOf_Integers[j] > ArrayOf_Integers[j + 1]) {
        let temp = ArrayOf_Integers[j];
        ArrayOf_Integers[j] = ArrayOf_Integers[j + 1];
        ArrayOf_Integers[j + 1] = temp;
        // the outer loop helps the iterate from the first element of the array to the last element of the array.
        // we would need another loop which would be the inner loop which would check in compareson of two elemenets from the left hand side.
        // when we do this with just the outer loop, this makes the first comes positioned to the last element of the array.
        // and, when we just do this with just creating the outer loop with the if condition ArrayOf_Integers[index] > ArrayOf_Integers[index + 1], this makes the largest element placed to last index of the array
      }
    }
  }
  // console.log("array is not sorted");
  // use bubble sort
}

console.log("ArrayOf_Integers: ", ArrayOf_Integers);

let ArrayOf_integers = [69, 68, 30001222180, 223001010781, 420, 143];

if (ArrayOf_integers.sort === 1) {
  // true
  console.log("Array is already sorted");
} else {
  for (let index = 0; index < ArrayOf_integers.length - 1; index++) {
    // if we four times sort make the largest elements are the right most side it automatically became sorted we dont need to check for the remaining element.
    for (let j = 0; j < ArrayOf_integers.length - j - 1; j++) {
      // here we making the optimisation as you see the the largest element is shift to the right most side we dont need to check again so so at each step we will take each step less
      if (ArrayOf_integers[j] > ArrayOf_integers[j + 1]) {
        let temp = ArrayOf_integers[j];
        ArrayOf_integers[j] = ArrayOf_integers[j + 1];
        ArrayOf_integers[j + 1] = temp;
      }
    }
  }
  // console.log("array is not sorted");
  // use bubble sort
}

console.log("ArrayOf_integers: ", ArrayOf_integers);

/*

The given JavaScript code implements Bubble Sort, which sorts an array in ascending order by repeatedly swapping adjacent elements if they are in the wrong order.

Let's manually trace how the array [68, 69, 30001222180, 223001010781, 420] is sorted step by step.

Initial Array:

[68, 69, 30001222180, 223001010781, 420]


 Pass 1:  
Compare adjacent elements and swap if needed.  
68 < 69 → No swap  
69 < 30001222180` → No swap  
30001222180 < 223001010781 → No swap  
223001010781 > 420 → Swap  
Array after Pass 1:  

[68, 69, 30001222180, 420, 223001010781]


Pass 2:  
68 < 69 → No swap  
69 < 30001222180 → No swap  
30001222180 > 420 → Swap  
Array after Pass 2:  

[68, 69, 420, 30001222180, 223001010781]


Pass 3:  
68 < 69 → No swap  
69 < 420 → No swap  
Array after Pass 3:  

[68, 69, 420, 30001222180, 223001010781]


Pass 4: 
68 < 69 → No swap  
Array after Pass 4 (Final Sorted Array): 

[68, 69, 420, 30001222180, 223001010781]


Final Output:

[68, 69, 420, 30001222180, 223001010781]


*/

// node "C:\Users\SUDIP BHATTACHARYA\Desktop\JS Interview-Q\Inter-jsOne\test.js"
// view "C:\Users\SUDIP BHATTACHARYA\Desktop\JS Interview-Q\Inter-jsOne\test.js" using to command we can see this whole file in the terminal

// reverse/deccending order

// 40. Write a program that creates a copy of an array without mutating the original.

var arr2 = [...ArrayOf_integers];
console.log("arr2: ", arr2);

// or

let ArrOf_integers = ArrayOf_integers.map((e) => {
  console.log(e);
});

// or

var arr3 = [];

ArrayOf_integers.forEach((value) => {
  arr3.push(value);
});

arr3.pop(); // no changes to the original array

console.log(arr3);

// 41. Write a function to check if a number is even or odd
// another question of to check all the elements of array t even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(90));
// console.log(checkEvenOdd(ArrayOf_integers));
console.log(checkEvenOdd(ArrayOf_integers[1]));
// console.log(checkEvenOdd(ArrayOf_integers[0 : ])); ✖
// console.log(checkEvenOdd(ArrayOf_integers.*)); ✖

// To check all the elements of the array for even or odd
ArrayOf_integers.forEach((num) => {
  console.log(`${num}: ${checkEvenOdd(num)}`);
}); // code defines the checkEvenOdd function and uses it to check the second element of the array and then iterates over all elements of the array to check if they are even or odd.

// 42. Create a function to calculate the areas of a circle with a given radius.

function calculateCircleArea(radius) {
  // return Math.PI * Math.pow(radius, 2);
  return Math.round(Math.PI * radius * radius); // pi r^2 | floor
} //  It should be applied to the result of the calculation

console.log(calculateCircleArea(5));

// 43. Write a function that accepts an array and returns the sum of its element.

function sumArrayElements(array) {
  var sum = 0;
  array.forEach((e) => {
    sum = sum + e;
  });

  return sum;
}

console.log(
  "the sum of its element: ",
  sumArrayElements([69, 68, 30001222180, 223001010781, 420, 143])
);

function sumArrayElements(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(sumArrayElements([69, 68, 30001222180, 223001010781, 420, 143])); //  It should pass the array as an argument
console.log(sumArrayElements(ArrayOf_integers)); // sumArrayElements function, creates an array ArrayOf_integers, and then logs the sum of its elements to the console using the sumArrayElements function.

// 44. Create a function that checks if a string starts with a specific character

function checkStartsWith(string, character) {
  // charAt(0) to check if the first character of the string is equal to the specified character. It then logs the result to the console.
  // return string.charAt(0) === character;// The startsWith method was used instead of charAt(0). The startsWith method checks if the string starts with the specified character, while charAt(0) returns the character at the specified index (in this case, index 0).
  // return string.startsWith(character);// returns either true or false
  // return string.startsWith(character.toLowerCase());
  return string.toLowerCase().startsWith(character.toLowerCase()); // converting both string, character to lowercase
}

console.log(checkStartsWith("JavaScript", "J"));
console.log(checkStartsWith("JavaScript", "j")); // before it was false

// 45. Write a function to find the maximum of two numbers

function function_to_find_the_maximum_of_two_numbers(One, Two) {
  if (One > Two) {
    return One;
  } else if (One < Two) {
    return Two;
  } else {
    return "Both numbers are equal";
  }
  // return Math.max(One, Two);
}

console.log(function_to_find_the_maximum_of_two_numbers(69, 69));

// 45. Write a function that takes a number and return its factorial.
function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

console.log(
  "A function that takes a number and return its factorial: ",
  factorialRecursive(69)
);

// or

function A_function_that_takes_a_number_and_return_its_factorial(number) {
  let factorial_of_a_number = 1;

  for (let i = 1; i <= number; i++) {
    factorial_of_a_number = factorial_of_a_number * i;
  }

  return factorial_of_a_number;
}

console.log(A_function_that_takes_a_number_and_return_its_factorial(69));
/*
Here's a dry run of the `A_function_that_takes_a_number_and_return_its_factorial` function with the input `69`:

1. Initialize `factorial_of_a_number` to `1`.
2. Start the loop with `i = 1` and continue until `i <= 69`.
3. In each iteration, multiply `factorial_of_a_number` by `i`.
4. After each iteration, increment `i` by `1`.
5. Repeat steps 3 and 4 until `i` becomes `70`.
6. Return the final value of `factorial_of_a_number`.

Here's the dry run step by step:

i = 1`, `factorial_of_a_number = 1 * 1 = 1`
i = 2`, `factorial_of_a_number = 1 * 2 = 2`
i = 3`, `factorial_of_a_number = 2 * 3 = 6`
- ...
i = 69`, `factorial_of_a_number = ... * 69`

After running the loop until `i = 69`, the final value of `factorial_of_a_number` will be the factorial of `69`.

To get the exact result, you can run the code in a JavaScript environment or use a calculator. The result will be a very large number.
*/

// 47. Write a function that accepts a string and return its reverse

function a_function_that_accepts_a_string_and_return_its_reverse(str) {
  // To reverse a string, you need to convert it into an array of characters using the split method, reverse the array using the reverse method, and then join the array back into a string using the join method.
  return str.split("").reverse().join(""); // 'j' 'a' 'v' 'a' 'S' 'c' 'r' 'i' 'p' 't' -> 't' 'p' 'i' 'r' 'c' 'S' 'a' 'v' 'a' 'j'

  // return str.reverse();// reverse method is not available on strings in JavaScript.
}

console.log(
  a_function_that_accepts_a_string_and_return_its_reverse("JavaScript")
); // uses the split, reverse, and join methods to reverse the input string and returns the reversed string.

// 47. Create a function to find the largest lemenet in the array

function largestElement(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }


  return largest;
}

console.log("a function to find the largest emenet in the array",largestElement(ArrayOf_integers));

// or perform soring and take out the last element

function largestElement_(arr){

    // arr.sort((a, b) => b - a); // Sort the array in descending order

    // use bubble sort (Ascending Order)

    for (let i = 0; i < arr.length - 1 ; i++) {
        
        for (let j = 0; j < arr.length - i - 1; j++) {
            
            if (arr[j] > arr[j + 1]) {
                
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
            
        }
        
        
    }
    // return arr[0]; // Return the first element, which is the largest when the array is sorted in dessending order.
    return arr[arr.length - 1]; // Return the last element (largest one)
}
console.log("Largest element after sorting: ", largestElement_([68, 69, 30001222180, 223001010781, 420]));

/*

Here's a dry run of the `largestElement` function with the input `ArrayOf_integers`:

javascript
let ArrayOf_integers = [69, 68, 30001222180, 223001010781, 420, 143];

console.log("Perform sorting and take out the last's elements: ", largestElement(ArrayOf_integers));


Dry run step by step:

1. Initialize the array `ArrayOf_integers` with the given values.
2. Call the `largestElement` function with `ArrayOf_integers` as the argument.
3. Start the outer loop with `i = 0` and continue until `i < arr.length - 1`.
4. In each iteration of the outer loop, start the inner loop with `j = 0` and continue until `j < arr.length - i - 1`.
5. In each iteration of the inner loop, compare `arr[j]` and `arr[j + 1]`.
6. If `arr[j]` is greater than `arr[j + 1]`, swap the elements by assigning `arr[j]` to a temporary variable `temp`, assigning `arr[j + 1]` to `arr[j]`, and assigning `temp` to `arr[j + 1]`.
7. After each iteration of the inner loop, the largest element will "bubble" up to the end of the array.
8. After the outer loop completes, the array will be sorted in descending order.
9. Return the first element of the sorted array, which is the largest element.

After running the dry run, the output will be:


Perform sorting and take out the last's elements:  223001010781


The largest element in the array `ArrayOf_integers` is `223001010781`.

*/

// 49. Write a function that converts a string to kabab-case (e.g., "Hello World" -> "hello-world").

function stringToKebabCase(str) {
  // Using the replace method with a regular expression to replace all non-alphanumeric characters with hyphens (-).
 //  return str.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();

  // Using the split method to convert the string into an array of words.
  // Then using the join method to convert the array of words into a string with hyphens (-) as the separator.
  // Finally, converting the string to lowercase.
  //   return str.split(" ").join("-").toLowerCase();

  // return str.replace(" ", "-")
 //  return str.replaceAll(" ", "-") 
  return str.replaceAll(" ", "-").toLowerCase();

}

console.log("a function that converts a string to kabab-case",stringToKebabCase("Hello World")); // "hello-world"

// 50. Create a function that logs "Hello, World!" every time it is called

function helloWorld() {
  console.log("Hello, World!");
}

helloWorld(); // logs "Hello, World!"

// Big O notation is used to clarify algorithms based on how fast they grow or decline. Big O notation is used to analyze the effeciency of an algorithm as its input approaches infinity, which means that as the size of an input to the algorithm grows, how drastically do the space or time requirements grow with it. For example, let's say that we have a dentist and she takes 30 minutes to treat one patient, As her line of patients increases, the time that it takes for her to treat all of the patients will scale linearly with the number of patients waiting in the line. 
// This is because it always takes her a constant amount of time to treat each individual patient supoose its 30 minutes. This would give us genearl understanding how how a dentist will take to treat 20 or 20 patients. This is because since we know that the dentist takes a constant amount of time, which is 30 minutes to treat each patient, we can always calculate the time it would take for the dentist to treat any number of patients by multiplying the number patients with the number of time it takes for her to treat an individual person in this case, which is 30 with this in mind we can calculate her efficiency linear. Or in Big O terms big O of n, where n is equal to the number of patients. the time that it would take her work to finsh would scale linearly or proportionally with the number of patients.

let linear_arr = [1, 2, 3, 4, 5, 6, 7];

function linearFunc(arr) {
  for(let i=0; i <arr.length; i++){
    console.log(1000 * 100000);// it will always takes same amount of time to calculate this line, therefore this line of code takes constant amount of time. 
  }
};

linearFunc(linear_arr); // the input to our function in an array with seven items inside of it. for each of those items, we will log this expression which multiplies 1000 times 100000.

function linearFunction(arr) {
  for (let i = 0; i < arr.length; i++) {// this function scales linearly or Big O(n). This line of code in the reason why the entire linear function is O of n (O(n)) because as the size of n increases the number of iterations that the for loop must traverse increases as well.
    console.log(1000 * 100000); // In this function, we have multiple lines that are O(1) but we still priortise the line that is O(n) and ignore O(1) operations.
    let something = (200000000 * 200000000) / 2; // if we add the performance of all of these lines up, like so O(n) + O(1) + O(1) + O(1) = O(n) all of the lines of code that are O(1) get cancelled out because the O(n) is the worst performing or highest order part of the function. this is why we ignore contants, because we're actually just eliminating the non dominant items. as a functions, input moves towards infinite, constant become less and less significant.
    console.log(something);// when evaluating aan algorithm efficientcy, we must takes into consideration the efficiency of each step within the algorithm, we then find the highest order step, or the step that has the worst performance, and priortize it over of the better performing steps. steps that are constant, or that are O(1) or as good as it gets in terms of efficiency. So we always ignore them, unless the entirety of the function is constant, or O(1). And in that case, we would categorise the entire function as constant or O(1)
  };
};

linearFunction(linear_arr);

// A constant is any step that doesnt scale with the input to the function. 

//For example, the time to evaluate the expression does not change with the input because both 100 and 1000 are constants. That is these values are always the same, this expression always results in the same value. And it always takes the same amount of time or constant time to return the same result.
function constant(arr) {
  var result = 100 * 1000;// every line of code is actually a function in and of itself 
  return result;
}

constant(linear_arr);

// Big O of One is for constant algorithms 

function constantFunc(arr) {// we pass in an array but the function does nothing with the aray. the only operation within the function is constant because it doesnt scale with any input. so regardless of how large of an array is passed to this function, This line always produces the same output.
  console.log(100 * 100000); // And this is the only line in the function So therefore, the entire function is O(1)
}

/*
In Big O, we have growth hirarchy

Order of Growth - this chart show the efficiency categories following in order from good to bad. That is to say that si tosay that this O(1) is the first best case. and And the last one is thw rost case. 
--------------

O(1)         Constant
O(log n)     Linear 
*/

// In big O notation, when determining the efficiency of an algorithm, we only care about the worst case. So that means that the worst case where the highest order operation trumps the operations that have better performance.

//  O(n^2)

function sqaure(n){  
   for(let i = 0; i < n; i++){ // each side will be same length, for every iteration of this top for loop we're also going to loop thorugh the nested for loop. And this nested for loop i doing the exact same thing that this for loop is doing. It's iterating though every number,  starting from zero up until the number in and within the nested for loop,   
    for(let j = 0; j < n; j++){ // j will execute 4 times in 4 (0, 1, 2, 3) rows and 4 (0, 1, 2, 3) columns
      console.log("sqaure: ", "i: " , i , " and" , " j " , j); // exch time, j will execute till 4 then i will be incremented the j will execute again this loop will continue until i runs running.
    }// forming a matrix we can look at i as columns and j as rows. "row" is line horijontally and "column" is a line vertically
   }// Area of square = Side length × side length that going to equal number of cells within this matrix that also happens to be the number of times that we have to perform this code. 4 * 4 is 4^2 = 16 cells O(N^2)
 }

sqaure(4);

//  O(N cubed) or O(N^3)

// this cube functiontakes in an argument n which is a number. And it's going to iterate though this foor loop. 
 function cube(n) {// basically, for every iteration this will take the inner nested loops will follow
    for(let i = 0; i < n; i++){ // for every iteration of this for loop is going to iterate through the entirity of its inner for loop. iterating up until n So, if we pass the number 4 to cube function, we'll end up here at this first for loop. And we're going to iterate starting from zero all the way up until n, whioch is four, Now for all the in cube, we're adding in additional nested for loop. so there's no longer just for a row and a column. Now we have rows, columns. And we also have this third dimension which we will just call height. a three dimensional array. i is going to start off as 0 and this initial for loop is representative of columns. once i becomes four, we're no longer going to iterate through this for loop because i is then no longer less than n, which is four, it will be equal to four.  
      for(let j = 0; j < n; j++){ // and for every iteration of this for loop will need to iterate though the entirity of inner for loop
            for(let k = 0; k < n; k++){ // the height would be represented by this k for loop. the rows would be represented by this j for loop. the columns would be represented by this i for loop. So for every iteration of this for loop, we're going to be moving up this k axis.
                console.log("cube: ", "i: " + i + " and" + " j: " + j + " k: " + k);
            }// i. first the inner most for loop for run 4 times then j will be incremented by 1 then the inner most loop will run again and this cycle will happen until the j becomes 4 the k will execute till Jth 0th iteration j will run 4 time 1th iteration k will run 4 times like this 4 + 4 + 4 + 4 this will result an 4*4 matrix
        }
    }
 }

cube(4);// to get the volume, the space within this cube 4*4*4 four cubed is 64 And that will be the volume of this cube, which just means that there are 64 of these miniature cubes within this larger cube. And that's the volume. which also happens to be the number of times we would perform this function console log the coordinates that is why this function is O(n) cube

// O(log n)
// Simply put a logarithm is the power that a number needs to be raised to get some other number. 
// number^number = some number - 2^3 = 2*2*2 = 8 - log2(8) log base 2 of 8? = 3
// In computer science unless specified otherwise, we can always assume that the number that we want to raise to sum power is two. 

function logFunc(n, count = 0) {// this function time complexity is O(n)
  // if(n === 0){
  if(n <= 1){
    // return "Done"
    return count
  }else{
    count++;
    n = Math.floor(n/2);// when we pass a number into this function, it divides in by two or splits it in half,  and then calls itself with the new half or divided number.
    return logFunc(n, count);// 8/2 = 4, 4/2 = 2, 2/2 = 0, 0===0 ✔ Done
  }
}

console.log("logFunc: ",logFunc(8));

// O(log n) iterative/non recursive

function logn(n) {
  let count = 0;// we iterate through this while loop as long n is grater than 1, each iteration of the while loop we are going to devide n by 2 and reassign to n so n is going to be halved for each iteration
  while (n > 1) {// When n becomes 1, Math.floor(1/2) = 0 > 1 ✖
    n = Math.floor(n/2)// 8/2 = 4/2 = 2/2 = 1/2 = 0 > 1 ✖
    count++;
  }
  return count;
}

console.log("logn: ", logn(8)); // O(log 8) is same as order of log base 2 of 8 = 2^3 = 2*2*2 = 8

// Binary Search & O(log n) - Any algorithm that repeatedly divides the input size by a constant factor (like 2) has O(log n) time complexity.

let BinaryS_arr = [51, 68, 69, 440, 480]

function IterativeBinaryS(arr, target) {
  
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2)
  
    if (target > arr[mid]) {
      start = mid +1
    }else if(target < arr[mid]){
      end = mid - 1;
    }else{
      return mid;
    }

    return -1;

  }

}

const result = IterativeBinaryS(BinaryS_arr, 69);

if (result !== -1) {
    console.log(`Value at index ${result}: ${BinaryS_arr[result]}`);
} else {
    console.log("The searched element is not found");
}

function RecursiveBinarySearch(arr, target, start = 0, end = arr.length - 1) {
  
  // base condition
  if (start > end) {// if the target is not in the array means it either means that the target is larger than the largest value in the array or its smaller than the smallest value in the array
    return -1;// So that means our function will keep checking our array until eventually we get to either the largest item if the target is larger than the largest value in the array,  or it gets to the smallest item if the target is smaller than the smallest item in the array. And at that point, the start and the end values will be equal 
  }

  let mid = Math.floor(start + (end - start) / 2)

  if (target > arr[mid]) {
    return RecursiveBinarySearch(arr, target, start = mid + 1, end)
  }else if(target < arr[mid]){
    return RecursiveBinarySearch(arr, target, start, end = mid - 1)
  }else{
    return mid;
  }

}

let RecursiveBinarySearch_array = [52, 68, 69, 68.8, 440, 481]

let RecursiveBinarySearch_result = RecursiveBinarySearch(RecursiveBinarySearch_array, 68)

if(RecursiveBinarySearch_result !== -1){
  console.log("RecursiveBinarySearch_result: " , RecursiveBinarySearch_result);
}else{
  console.log("The searched element is not found");
}