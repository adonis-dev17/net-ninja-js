let radius = 10;
const pi = 3.14;

console.log(radius, pi);
//1. Math operators +, -, *, /, %

console.log(10/2);//output: 5

let result = radius % 3;
console.log(result);// output: 1

let result1 = pi * radius**2;
console.log(result1);//output: 314

//2. Order of Operation => B I D M A S
// Brackets Indices Division Multiplication Addition Subtraction
let result2 = 5 * (10-3)**2;
console.log(result2);//Output: 245


let likes = 10;
likes = likes + 1;//longway vs. short-hand notation below
console.log(likes); //Output: 11

//3. Short-Hand Notation
let iLikes = 10;
iLikes++;
console.log(iLikes);//same output: 11

iLikes--;
console.log(iLikes)// back to output: 10

iLikes += 10;
console.log(iLikes);//Output: 20

iLikes -= 5;
console.log(iLikes);// Output: 15

iLikes *= 2;
console.log(iLikes);//Output: 30

iLikes /= 10;
console.log(iLikes);//Output: 3
