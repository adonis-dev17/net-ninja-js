//1. object literals

// let user = {
//   name: 'Crystal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'Berlin',
//   blogs: ['Why mac & cheese rules', '10 Things to make with marmite']
// };

// console.log(user);

// // 2. Dot notation
// console.log(user.name);
// // user.age = 35;
// console.log(user.age);

// // 3. Bracket Notation - useful in passing a variable

// let key = 'location';//passing to a variaqble
// console.log(user[key]);


// user['name'] = 'Chun-li';
// console.log(user['email']);
// console.log(user['name']);

// //4. typeof
// console.log(typeof user);//output: object

// ----------------------x------------------------------------

// 5. Methods - regular functions and shrothand version
// let user = {
//   name: 'Crystal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'Berlin',
//   blogs: ['Why mac & cheese rules', '10 Things to make with marmite'],
//   // login: function() {
//   //   console.log('The user logged in.');
//   // },

//   // logout: function() {
//   //   console.log('The user logged out.');
//   // },
// // 6. Shorthand version - removing the colon and function
// // Note: we cannot use an arrow function here else this will not work
//   login() {
//     console.log('The user logged in.');
//   },

//   logout() {
//     console.log('The user logged out.');
//   },
 
// //7. this keyword - context object 
//   logBlogs() {
//     // console.log(this.blogs);
//     console.log('This user has written the following blogs:');
//     this.blogs.forEach(blogs => console.log(blogs));
//   }
// };

// user.login();
// user.logout();
// user.logBlogs()

// -------------------------x----------------------------
// 8. Add array of objects inside an object

  // let blogs = [
  //   {title: 'Why mac & cheese rules', likes: 30},
  //   {title: '10 Things to make with marmite', likes: 50}
  // ];
  // console.log(blogs); 

//   let user = {
//   name: 'Crystal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'Berlin',
// // objects inside an object
//   blogs: [
//     {title: 'Why mac & cheese rules', likes: 30},
//     {title: '10 Things to make with marmite', likes: 50}
//   ],

//   login() {
//     console.log('The user logged in.');
//   },

//   logout() {
//     console.log('The user logged out.');
//   },
 
//   logBlogs() {
//     console.log('This user has written the following blogs:');
//     this.blogs.forEach(blogs => console.log(blogs));
//   }
// };

// user.logBlogs();

// --------------------x----------------------

// 9. Math Object

// console.log(Math);
// //10.  Math constants
// console.log(Math.PI);//Output: 3.141592653589793
// console.log(Math.E);//Output: 2.718281828459045

// // 11. Math methods
// let area = 7.7;
// console.log(Math.round(area));//output: 8

// let area1 = 7.2;
// console.log(Math.round(area1));//output: 7

// console.log(Math.floor(area));//output: 7
// console.log(Math.floor(5.7));//output: 5

// console.log(Math.ceil(area));//output: 8
// console.log(Math.ceil(4.1));//output: 5

// console.log(Math.trunc(area));//output: 7
// console.log(Math.trunc(4.1));//output: 4

// // 12. random numbers
 
// const random = Math.random();

// console.log(random);
// console.log(Math.round(random));//output: either 0 or 1;
// console.log(Math.round(random * 100));//output: random from 1 to 100;

// ------------------------x-----------------------------
// 13. Reference Values vs. Primitive Values

// Primitive

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
// output: scoreOne: 50 scoreTwo: 50
scoreOne = 90;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
// output: scoreOne: 90 scoreTwo: 50


// Reference
const userOne = { name: 'ryu', age: 30};
const userTwo = userOne;

console.log(`userOne: ${userOne}`, `userTwo: ${userTwo}`);














