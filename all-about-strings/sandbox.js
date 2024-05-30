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
let result2 = email1.slice(5, 7)//slice starts from index 5, 7 characters from index 0.
console.log(result2);//output: s.

//3. .substr()
let result3 = email1.substr(1, 6);//starts from index 1, 6 characters starting from index 1.
console.log(result3);//output: donis.

//4. .replace()
let result4 = email1.replace('i', 'y');//will replace the first i to y.
console.log(result4);//output: adonys.dev17@gmail.com

//5. Template Strings / Template Literals
const title = 'Best Reads of 2019';
const author = 'Adonis';
const likes1 = 30;

//Concatenation Way - Tedious way
let result5 = 'The blog called ' + title + ' by ' + author + ' has ' + likes1 + ' likes.';
console.log(result5);//Output: The blog called Best Reads of 2019 by Adonis has 30 likes.

//Using Template String
let result6 = `The blog called ${title} by ${author} has ${likes1} likes.`
console.log(result6);//Output: The blog called Best Reads of 2019 by Adonis has 30 likes.

//Creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes1} likes</span>
`;
console.log(html);
//Output: 
    // <h2>Best Reads of 2019</h2>
    // <p>By Adonis</p>
    // <span>This blog has 30 likes</span>
