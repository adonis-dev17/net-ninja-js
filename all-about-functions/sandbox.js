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
function greet(name='Adonis', time='Evening') {
  console.log(`Good ${time}, ${name}!`);
}
greet();
greet('Constantine', 'morning');


