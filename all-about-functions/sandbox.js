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
// const name = 'shaun';
// // function - defined on its own; not define by an object.
// const greet = () => 'hello';
// let resultOne = greet();
// console.log(resultOne);

// // Methods - invoke using dot notation; defined by an object.
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// 9. Callbacks & foreach

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(function(value){
//     // do comething;
//     console.log(value);
// }); //OUtput: 50
// // is the same as an arrow function below.
// myFunc(value => {
//     // do comething;
//     console.log(value);
// });//OUtput: 50
// ------------------*------------------------
// forEach - in an array
// let people = ['Adonis', 'Eden', 'Zenitsu', 'Cham', 'Constantine'];

// people.forEach(function(person){
//     console.log(person);
// });
// Output:
// Adonis  
// Eden    
// Zenitsu     
// Cham    
// Constantine

// Convert above to Arrow function
// people.forEach((person, index) => {
//     console.log(index, person);
// });
// output:
// 0 Adonis 
// 1 Eden 
// 2 Zenitsu 
// 3 Cham 
// 4 Constantine

// Another example -------------x--------------

//  let people = ['Adonis', 'Eden', 'Zenitsu', 'Cham', 'Constantine'];

//  const logPerson = (person, index) => {
//     console.log(`${index} - Hello ${person}`);
//  }

//  people.forEach(logPerson);
//  Output
// 0 - Hello Adonis 
// 1 - Hello Eden 
// 2 - Hello Zenitsu 
// 3 - Hello Cham 
// 4 - Hello Constantine

// 10. Created an html template using for each
// let ul = document.querySelector('.people');

// let team = ['Adonis', 'Eden', 'Cham', 'Pogi', 'Bella', 'Zenitsu', 'Toothless', 'Salem'];

// let html = '';

// team.forEach(member => html += `<li style="color: purple">${member}</li>`);

// console.log(html);

// ul.innerHTML = html;


// -------------x---------------

let ul = document.querySelector('.people')
let xAnimals = ['T-rex', 'Dodo', 'Sabertooth'];
let html = '';

let x = (xx, index) => html += `<li style="color:purple">${index+1} --> ${xx}</li>`;

xAnimals.forEach(x);

ul.innerHTML = html;





