// EX1

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const doubledNums = nums.map(num => num * 2);

console.log(doubledNums);

// EX2 

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// Your code here

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [Pineapple, Olives] = pizzaToppings;

console.log(Pineapple);
console.log(Olives); 

console.log(pizzaToppings[0]); 
console.log(pizzaToppings[1]); 

//EX3

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// Your code here

  const car = {
    make: 'Audi',
    model: 'q5',
  };

  const { make, model } = car;

console.log(make); 
console.log(model); 

console.log(car.make); 
console.log(car.model); 

// EX4

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// Your code here

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);

// EX5

// Duplicate the following object and spread its values into a new variable `myCar`.

// Change the `model` property of `myCar` to 'q7'. Log both objects.
  
// Your code here

/* const car = {
    make: 'Audi',
    model: 'q5',
  }; */

const myCar = {...car };

myCar.model = 'q7';

console.log('car:', car);
console.log('myCar:', myCar);

// EX6

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const userProfile = {};

const propertyName = 'username'; 

userProfile[propertyName] = 'AbdulAziz'; 

console.log(userProfile);

// EX7
// EX8 

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function cat(noun = 'cat', adjective = 'white') {
  console.log(`The ${noun} is ${adjective}.`);
}

// EX9

// Convert the following `if...else` statement in to a ternary:

let Pizza = 'tasty';

if (Pizza === 'tasty') {
console.log('yum');
} else {
console.log('yuck');
}

// Your code here

let pizza = 'tasty';

pizza === 'tasty' ? console.log('yum') : console.log('yuck');

//  EX10

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here

const LANG = localLangConfig || 'en';
console.log(LANG);

// Log the result
console.log('Language setting:', LANG);

// EX11

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

// Your code here

let cats = adventurer.cats?.name; 

console.log(cats);