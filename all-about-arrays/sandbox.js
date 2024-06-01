let ninjas = ['adonis', 'constantine', 'sam', 'eden'];

console.log(ninjas);//Output: ['adonis', 'constantine', 'sam', 'eden']
console.log(ninjas[1]);//Output: constantine

ninjas[1] = 'Tantan'; //overide values
console.log(ninjas[1]); //Output: Tantan

// .length
console.log(ninjas.length);//Output: 4

// Array Methods
//1. .join()
let result = ninjas.join(',');
console.log(result);//Output: adonis,Tantan,sam,eden

// 2. .indexOf()
let result1 = ninjas.indexOf('sam');
console.log(result1);//Output: 2

// 3. 