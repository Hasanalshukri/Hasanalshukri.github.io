// 1. Strings!
//console.log('Task 1. Strings');

let myString = "hello,this,is,a,difficult,to,read,sentence";

//the string 
console.log("String:", myString);

// Log the length of myString
console.log("Length of myString:", myString.length);

// Remove commas and replace with spaces
let modifiedString = myString.replace(/,/g, ' ');

// Log the modified string
console.log("Mytring:", modifiedString);

// Log the original and modified strings
console.log("String:", myString);
console.log("Mystring:", modifiedString);

// 2. Arrays
// console.log('Task 2. Arrays');


let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

// Add Mauro's favorite animal
favoriteAnimals.push("turtle");

// Log the updated array
console.log(favoriteAnimals);


// Add Jim's favorite animal 'meerkat'
favoriteAnimals.splice(1, 0, "meerkat");

// Log the updated array
console.log(favoriteAnimals);
console.log("The updated array includes Jim's favorite animal 'meerkat':", favoriteAnimals);

console.log("Updated array:", favoriteAnimals);
console.log("The array has a length of:", favoriteAnimals.length);
// Find the index of 'giraffe' in the array
var indexOfGiraffe = favoriteAnimals.indexOf('giraffe');

// Check if 'giraffe' is found in the array
if (indexOfGiraffe !== -1) {
    // Remove 'giraffe' using splice
    favoriteAnimals.splice(indexOfGiraffe, 1);

    // Log the updated array
    console.log("Updated array after removing 'giraffe':", favoriteAnimals);
} else {
    console.log("'giraffe' not found in the array.");
}

["blowfish", "capricorn", "turtle", "meerkat"]
console.log("Updated array after removing 'giraffe':", favoriteAnimals);

// 2.9 To remove an item from an array without knowing its index, you can use the indexOf method to find the index of the item and then use the splice method to remove it. Here's an example:
let indexToRemove = favoriteAnimals.indexOf('meerkat');

if (indexToRemove !== -1) {
    favoriteAnimals.splice(indexToRemove, 1);
    console.log("Removed 'meerkat' from the array.");
} else {
    console.log("'meerkat' not found in the array.");
}

console.log("Updated array:", favoriteAnimals);

// 2.10 Certainly! Here's an example code to log the index of 'meerkat' with a message:
let indexMeerkat = favoriteAnimals.indexOf('meerkat');

if (indexMeerkat !== -1) {
    console.log("The item 'meerkat' is at index: " + indexMeerkat);
} else {
    console.log("'meerkat' not found in the array.");
}

// More JavaScript 🎉
// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.

if (indexToRemove !== -1) {
    favoriteAnimals.splice(indexToRemove, 1);
    console.log("Removed 'meerkat' from the array.");
} else {
    console.log("'meerkat' not found in the array.");
}

console.log("Updated array:", favoriteAnimals);

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
    console.log("A " + color + " car");
}

// Example usage:
colorCar("red");

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

// Example object
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue"
};

// Function to print object properties and values
function printObjectDetails(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

// Example usage:
printObjectDetails(car);

// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
    if (code === 1) {
        console.log("a " + color + " car");
    } else if (code === 2) {
        console.log("a " + color + " motorbike");
    } else {
        console.log("Unknown vehicle code");
    }
}

// Example usage:
vehicleType("blue", 1); // Output: a blue car
vehicleType("red", 2);  // Output: a red motorbike
vehicleType("green", 3); // Output: Unknown vehicle code

// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?

console.log(3 === 3 ? "yes" : "no");

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
    // Define vehicle types
    const vehicleTypes = ["car", "motorbike"];

    // Check if the provided code corresponds to a known vehicle type
    const vehicleType = vehicleTypes[code - 1];

    // Determine the status based on age
    const status = age > 0 ? "used" : "new";

    // Log the result
    console.log(`a ${color} ${status} ${vehicleType}`);
}

// Example usage
vehicle("blue", 1, 5); // Outputs: a blue used car

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

const vehicles = ["motorbike", "caravan", "bike", "car", "truck", "scooter"];

// 8. How do you get the third element from that list?
const thirdElement = vehicles[2];
console.log(thirdElement); 
 
// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicleNew(color,code,age){
    if (age < 0 || typeof(age) !== 'number'){
        console.log('Age has to be a number >= 0');
    }else{        
        let message = `a ${color} `;
        if (age === 0) {
            message += 'new';
        }else{
            message += 'used'
        };

        message = (vehicles[code - 1] === undefined)
         ? `Choose number from 1 to ${vehicles.length} for vehicle type` 
        
         : message + ` ${vehicles[code - 1]}`;
        console.log(message)  
    }
}
    
vehicleNew('blue',1,5);
vehicleNew('green',3,0);
vehicleNew('red',5,0); //if incorrect type code

// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

function showAdvertisement(vehicleType){
    let message = "Amazing Joe's Garage, we service ";
    vehicleType.forEach((element,i) => {
        message += (i === vehicleType.length - 1) ? `and ${element}s.` : `${element}s, `
    });
    console.log(message);
}

showAdvertisement(vehicles);

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
const vehicles2 = ["motorbike", "caravan", "bike", "car", "scooter", "truck"];
showAdvertisement(vehicles2);

// 12. Create an empty object.

const emptyObject = {};

// 13. Create an object that contains the teachers that you have had so far for the different modules.

const teachers = {
    modul1: ['Sarah','Rami'],
    modul2: 'Sam'
};


// 14. Add a property to the object you just created that contains the languages that they have taught you.

teachers.languages = ['js', 'html', 'css'];
printObject(teachers);

// 15. Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

// Test using ==
console.log(x == y); // Output: false
console.log(y == z); // Output: true

// Test using ===
console.log(x === y); // Output: false
console.log(y === z); // Output: true

// 16. Take a look at the following code:
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

// Changing o2
o2.foo = "baz";

console.log(o1.foo); // Output: "bar"
console.log(o2.foo); // Output: "baz"
console.log(o3.foo); // Output: "baz"

// Changing o3
o3.foo = "qux";

console.log(o1.foo); // Output: "bar"
console.log(o2.foo); // Output: "qux"
console.log(o3.foo); // Output: "qux"

// 17. What does the following code return? (And why?)
let bar = '42';
console.log("let's check a result");
console.log(typeof typeof bar);
// ‘Coerce' means to try to change - so coercing var x = '6' to number means
//  trying to change the type to number temporarily.

console.log("Even if we change type of variable final resalt will be the same");
console.log("let's check a result");
let bar2 = '6';
let bar3 = true;
console.log(typeof typeof bar2);
console.log(typeof typeof bar2);


