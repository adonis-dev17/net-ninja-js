//Type conversions
let score = '100';

// Explicit Type of Conversions

//1. Using Numbers()
score = Number(score);
console.log(score+1);//Output: 101

//Using typeof
console.log(typeof score);//Output: number

//2. String
let result = String(50);
console.log(result, typeof result);//Output: 50 string

//3. Boolean

//3.1 Truthy vs. Falsey values
let result1 = Boolean(100);//100 is called truthy value
console.log(result1, typeof result1);//Output: true 'boolean'

let result2 = Boolean(0);//0 is called a falsey value
console.log(result2, typeof result2);//Output: false 'boolean'

let result3 = Boolean('0');//'0' is a truthy value
console.log(result3, typeof result3);//Output: true 'boolean'

let result4 = Boolean('');//'' is called a falsey value
console.log(result4, typeof result4);//Output: false 'boolean'
