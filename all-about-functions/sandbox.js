// //1. function declaration
// function greet() {
//   console.log('Hello World!');
// }

// //2. Invoking or calling the function;
// greet();
// greet();
// greet();

// //3. function expression - function inside a variable
// const speak = function() {
//   console.log('Good day, World!');
// };

// speak();
// speak();
// speak();

//4. Pass a value into a function

// function greet(name, time) {
//   console.log(`Good ${time}, ${name}!`);
// }
// greet('Constantine', 'morning');

// 5. Default values
// function greet(name='Adonis', time='Evening') {
//   console.log(`Good ${time}, ${name}!`);
// }
// greet();
// greet('Constantine', 'morning');

// 6. Return values

// let calculateArea = function(radius) {
//   return 3.14 * radius **2;
// };

// let area = calculateArea(5);
// console.log(area);

// 7. regular function vs. Arrow function

// let calculateArea = function(radius) {
//   return 3.14 * radius **2;
// };



// Arrow function
// let calculateArea = radius => 3.14 * radius **2;

// let area = calculateArea(5);
// console.log('area is: ', area);

//8. Functions Vs Methods
const name = 'shaun';
// function - defined on its own; not define by an object.
const greet = () => 'hello';
let resultOne = greet();
console.log(resultOne);

// Methods - invoke using dot notation; defined by an object.
let resultTwo = name.toUpperCase();
console.log(resultTwo);


