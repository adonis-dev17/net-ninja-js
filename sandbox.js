//Strings
console.log('Hello');

let email = 'ado.medrocillo@gmail.com';
console.log(email);

//Concatenation
let firstName = 'John';
let lastName = 'Anderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//Square Bracket Notation
console.log(fullName[3]);

// String Length - a property
console.log(fullName.length);

//string methods - a method if has ()

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result, fullName); //some methods don't alter the original value

//indexOf
let index = email.indexOf('@');
console.log(index);