//1. object literals

let user = {
  name: 'Crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'Berlin',
  blogs: ['Why mac & cheese rules', '10 Things to make with marmite']
};

console.log(user);

// 2. Dot notation
console.log(user.name);
// user.age = 35;
console.log(user.age);

// 3. Bracket Notation - useful in passing a variable

let key = 'location';//passing to a variaqble
console.log(user[key]);


user['name'] = 'Chun-li';
console.log(user['email']);
console.log(user['name']);

//4. typeof
console.log(typeof user);//output: object