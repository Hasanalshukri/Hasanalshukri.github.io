// Greetings in different languages
let greetings = {
    English: "Hello World!",
    Italian: "Ciao Mondo!",
    Arabic: "مرحبا بالعالم!",
    Swedish: "Hej världen!"
}
console.log(greetings)

//point number 2
console.log("I'm awesome");

//point number 3
let x = '';


// TODO -> here you initialize your variable
console.log("the value of my variable x will be: I Love Iraq");

console.log(x);

{
let x = 3;   // Allowed
}

console.log("the value of my variable x will be: number 3");
console.log(x);


// point number 4

// TODO -> here you declare AND assign your string
let y = 5;
console.log("the value of my string will be: number 5");

// TODO -> log the actual value of the string to the console
console.log(y);

// TODO -> assign a new value to your variable x
{
   let x = 4;
}
console.log("the value of my string will be: Ciao Bella");

// TODO -> log the actual value of the string to the console
console.log(x);

//point number 5

let roundedNumber = Math.round(7.25);
console.log(roundedNumber);

let z = 7.25;
console.log(z);

let a = Math.round(z);
console.log(a);

let highestvalue = Math.max(z, a);
console.log(z, a ); 

//point number 6 arrays

let items = [];

// Log the array to the console.
console.log(items);

// Explain in words what you think the value of the array is.
console.log("array ");


// Declare an array with my favorite animals.
let myFavoriteAnimals = ['Dog', 'cat', 'Dolphin', 'Panda','lion'];

// Log the array to the console.
console.log("My Favorite Animals:", myFavoriteAnimals);


// Add Daan's favorite animal ('baby pig') to the array.
myFavoriteAnimals.push('baby pig');

// Log the updated array to the console.
console.log("Updated Favorite Animals:", myFavoriteAnimals);

//point number 7 
let myString = "20";
console.log(myString);

let length = "myString";
console.log(myString);

//point number 8

// Declare variables with different data types
let name = "John"; 
console.log("Name:", name);
let age = 25;   
console.log("Age:", age);

let isStudent = true;  
console.log("Is Student:", isStudent);

let hobbies = ["Reading", "Coding", "Traveling"]; 
console.log("Hobbies:", hobbies);


// Log the type of each variable to the console
// string
console.log("The type of 'name' is:", typeof name); 

// Number
console.log("The type of 'age' is:", typeof age);  

// Boolean
console.log("The type of 'isStudent' is:", typeof isStudent); 

// Object 
console.log("The type of 'hobbies' is:", typeof hobbies); 

// Compare the types of variables
console.log("Is 'name' a string?", typeof name === "string");
console.log("Is 'age' a number?", typeof age === "number");
console.log("Is 'isStudent' a boolean?", typeof isStudent === "boolean");
console.log("Is 'hobbies' an array?", Array.isArray(hobbies));


// Compare the types of variables
console.log("Is 'name' a string?", typeof name === "string" ? "Yes" : "No");
console.log("Is 'age' a number?", typeof age === "number" ? "Yes" : "No");
console.log("Is 'isStudent' a boolean?", typeof isStudent === "boolean" ? "Yes" : "No");
console.log("Is 'hobbies' an array?", Array.isArray(hobbies) ? "Yes" : "No");

//point number 9

// Given x equals 7
{
  let x =7;
}
console.log("Original value of x:", x);

// Applying x = x % 3, which calculates the remainder of x divided by 3
x = x % 3;

// Show the result after applying the modulo operation
console.log("After x = x % 3, new value of x:", x);

console.log("After x % 3, new value of x:", x);

// Show how x % 3 helps to determine if a number is divisible by 3
console.log("Is x divisible by 3?", x === 0 ? "Yes" : "No");

//point number 10
let mixedArray = [0, "two", 3, "four", 5];
console.log("Miixed. Array:", mixedArray);

// Compare infinities
let result = 6/0 === 10/0;

// Log the result
console.log("Is 6/0 equal to 10/0?", result);


// Log the actual values of 6/0 and 10/0
console.log("Value of 6/0:", 6/0);
console.log("Value of 10/0:", 10/0);

// Check if the result is positive infinity
console.log("Is the result positive infinity?", result === Infinity);

// Check if 6/0 and 10/0 are equal using loose equality (==)
console.log("Loose equality check:", 6/0 === 10/0);

// Check if 6/0 and 10/0 are equal using strict equality (===)
console.log("Strict equality check:", 6/0 === 10/0);



