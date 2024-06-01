//1. Booleans &Comparisons
console.log(true, false, 'true', 'false'); //Output: true false 'true' 'false'

//2. Methods can return booleans
let email = 'adonis.dev17@gmail.com';
let names = ['Constantine', 'Eden', 'Sam', 'Adonis'];

let result = email.includes('@');
console.log(result);//Output: true

let result1 = names.includes('Sam');
console.log(result1);//Output: true

//3. Comparison Operators
let age = 25;

console.log(age === 25);//Output: true
console.log(age === 30);//Output: false
console.log(age != 25);//Output: false
console.log(age > 20);//Output: true
console.log(age < 20);//Output: false
console.log(age <= 25);//Output: true
console.log(age >= 25);//Output: true

//4. nother comparison in strings
let name = 'adonis';

console.log(name == 'adonis');//Output: true
console.log(name == 'Adonis');//Output: false
console.log(name > 'eden');//Output: false
console.log(name > 'Adonis');//Output: true
console.log(name > 'Constantine');//Output: true

//5. Loose comparison (different types can still be equal)
console.log(age == 25);//Output: true
console.log(age == '25');//Output: true

console.log(age != 25);//Output: false
console.log(age != '25');//Output: false

//Strict Comparison
console.log(age === 25);//Output: true
console.log(age === '25');//Output: false
console.log(age !== 25);//Output: false
console.log(age !== '25');//Output: true























