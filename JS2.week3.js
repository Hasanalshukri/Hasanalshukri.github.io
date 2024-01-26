// 2.1 We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.

function foo(func) {
 func();
  console.log(func);
}

function bar() {
  console.log('Hello, I am student!');
}

foo(bar);

// 2.2  

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  // Generate array from start to stop
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  // Iterate over the array and call callbacks accordingly
  numbers.forEach((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      // If divisible by both 3 and 5, call both callbacks
      threeCallback(num);
      fiveCallback(num);
    } else if (num % 3 === 0) {
      // If divisible by 3, call the first callback
      threeCallback(num);
    } else if (num % 5 === 0) {
      // If divisible by 5, call the second callback
      fiveCallback(num);
    }
    // If not divisible by either, do nothing
  });
}

// Define the callback functions
function sayThree(num) {
  console.log(num + ': sayThree');
}

function sayFive(num) {
  console.log(num + ': sayFive');
}

// Call threeFive with specified callbacks
threeFive(10, 15, sayThree, sayFive);

// 2.3.1 Use a 'for' loop

function repeatStringNumTimesWithFor(str, num) {
  let result = '';
  for (let i = 0; i < num; i ++) {
    result += str;
  }

  console.log(str, num, result);

  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// 2.3.2 Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let result = '';
  let i = 0;

  while (i < num) {
    result += str;
    i++;
  }

  console.log(str, num, result);

  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// 2.3.3 Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let result = '';
  if (num > 0) {

  let i = 0;

  do {
    result += str;
    i++;
  }
  while (i < num);
}

  console.log(str, num, result);

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// .2.4 
function Dog() {
  this.name = "niki";
  this.color = "white";
  this.numLegs = 4;
}

const hound = new Dog();
// Do not change or remove anything below this line
module.exports = hound;
 
// 2.5 
function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  console.log(arr, product);

  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result); // 720

// Do not change or remove anything below this line
module.exports = multiplyAll;
 
// 2.6
const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  return arr.flat();
  console.log(arr);
}

function flattenArray3d(arr) {
  return arr.flat(2);
  console.log(arr);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};

// 2.7 Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

//In this case, x is a primitive type (number). When f1(x) is called, the value of x (9) is passed to the function. Inside the function, val is a local variable that receives a copy of the value of x. When you modify val inside the function, it does not affect the original variable x outside the function. Therefore, console.log(x) prints 9 because the value of x remains unchanged.
//In this case, y is an object. Objects in JavaScript are passed by reference. When f2(y) is called, the reference to the object { x: 9 } is passed to the function. Inside the function, val now references the same object as y. When you modify val.x inside the function, it directly affects the original object referenced by y because they both point to the same object. Therefore, console.log(y) prints { x: 10 } because the object referenced by y has been modified inside the function.
