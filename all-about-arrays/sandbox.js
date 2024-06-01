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

// 3. .concat()
let result2 = ninjas.concat('Zenitsu', 'Bella');
console.log(result2);//Output: ['adonis', 'Tantan', 'sam', 'eden', 'Zenitsu', 'Bella']

//4. .push()
let result3 = ninjas.push('Toothless');
console.log(result3);//Output: 5
console.log(ninjas);//Output: ['adonis', 'Tantan', 'sam', 'eden', 'Toothless']

//5. .pop()
result3 = ninjas.pop();
console.log(result3);//Output: Toothless
console.log(ninjas);//Output:  ['adonis', 'Tantan', 'sam', 'eden']

//6.
