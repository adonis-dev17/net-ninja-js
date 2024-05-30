//Strings
console.log('Hello 123 M@sterFile');

let email = 'ado.medrocillo@gmail.com';
console.log(email);

//Concatenation
let firstName = 'John';
let lastName = 'Anderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//Getting characters using Square Bracket
console.log(fullName[3]);

// String Length - a property
console.log(fullName.length);

//string methods - a method if has ()

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result, fullName); //some methods don't alter the original value

//indexOf()
let index = email.indexOf('@');
console.log(index);//Output: 14

// *********  M O R E   M E T H O D S   ************
// Common String Methods
//1. lastIndexOf()
let email1 = 'adonis.dev17@gmail.com';

let result1 = email1.lastIndexOf('.');
console.log(result1);//output: 18

//2. .slice()
let result2 = email1.slice(0, 6)//slice from position 0, to position 5
console.log(result2);//output: adonis


