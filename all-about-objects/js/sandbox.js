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

  let user = {
  name: 'Crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'Berlin',
// objects inside an object
  blogs: [
    {title: 'Why mac & cheese rules', likes: 30},
    {title: '10 Things to make with marmite', likes: 50}
  ],

  login() {
    console.log('The user logged in.');
  },

  logout() {
    console.log('The user logged out.');
  },
 
  logBlogs() {
    console.log('This user has written the following blogs:');
    this.blogs.forEach(blogs => console.log(blogs));
  }
};

user.logBlogs();