// Let Const


let count = 1;

count = 2; // Allowed


const max = 5;

// max = 10; // Error: Assignment to constant variable


// Block scope

if (true) {

  let message = 'Hello';

  console.log(message); // 'Hello'

}

// console.log(message); // Error: message is not defined


// Template Literals

let user = 'Alice';

let greeting = `Welcome, ${user}!`;

console.log(greeting); // 'Welcome, Alice!'


let a = 5;

let b = 10;

console.log(`Sum is ${a + b}`); // 'Sum is 15'



// Arrow Functions

// Traditional function

function add(x, y) {

    return x + y;

  }

  // Arrow function

  const add = (x, y) => x + y;

  console.log(add(2, 3)); // 5

 

  // With multiple statements

  const multiply = (x, y) => {

    let result = x * y;

    return result;

  };


//   Default Parameters

function greet(name = 'Guest') {

    console.log(`Hello, ${name}`);

  }

 

  greet(); // 'Hello, Guest'

  greet('Bob'); // 'Hello, Bob'



// Arithmetic

let sum = 10 + 5; // 15

let product = 10 * 5; // 50


// Assignment

let a = 10;

a += 5; // a is now 15


// Comparison

let isEqual = (5 == '5'); // true (loose equality)

let isStrictEqual = (5 === '5'); // false (strict equality)


// Logical

let isAdult = true;

let hasID = false;

let canEnter = isAdult && hasID; // false