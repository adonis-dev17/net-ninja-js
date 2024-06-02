//1. For Loops

// for (let i=0; i<5; i++) {
//   console.log('in loop: ', i);
// }
// console.log('looped finished');
// Output: 
// in loop:  0
// in loop:  1
// in loop:  2
// in loop:  3
// in loop:  4
// looped finished

// 2. for loop used in array
// const names = ['Adonis', 'Eden', 'Cham', 'Constantine'];

// for (let i=0; i<names.length; i++) {
//   // console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }
// Output:
// {/* <div>Adonis</div>
//     <div>Eden</div>
//     <div>Cham</div>
//     <div>Constantine</div> */}

// 3. While Loop - an alternative to for loop

// let i = 0;
// while(i<5) {
//   console.log('in loop: ', i);
//   i++;
// }
// Output: 
// in loop:  0
// in loop:  1
// in loop:  2
// in loop:  3
// in loop:  4
// looped finished
// let names = ['Adonis', 'Eden', 'Cham', 'Constantine'];
// let i = 0;
// while(i<names.length) {
//   console.log(names[i]);
//   i++;
// }
//Output:
// Adonis
// Eden
// Cham
// Constantine

//4. Do While loop
// let i = 5;
// do {
//   console.log('val of i is: ', i);
//   i++;
// } while(i<5);
//Output: val of i is:  5

// 5. If statements
// const age = 20;

// if(age>20) {
//   console.log('You are over 20 years old.');
// }

// const ninjas = ['Adonis', 'Eden', 'Cham', 'Constantine'];
// if (ninjas.length > 3) {
//   console.log('That\'s a lot of ninjas!');//Output: That's a lot of ninjas!
// }

//6. else-if statements
// const password = 'p@ssw';

// if (password.length >= 12 && password.includes('@')) {
//   console.log('That password is mighty strong!');
// } else if ((password.length >= 8 || password.includes('@')) && password.length >= 5) {
//   console.log('That password is pretty strong...');
// } else {
//   console.log('That password is not strong enough.');
// }

//7. Logical Not

// console.log(!true);//Output: false
// console.log(!false);//Output: false

// let user = false;

// if(!user) {
//   console.log('You must be logged in...');//Output: You must be logged in...
// }

//8. break and continue
const scores = [20, 10, 50, 80, 0, 30, 0,100, 90, 60, 5, 0, 70, 0, 50, 90];

for (let i=0; i<scores.length; i++) {
  
  if(scores[i] === 0) {
    continue;//This will skips all 0 scores;
  }

  console.log('Your score is ', scores[i]);

  if(scores[i] === 100) {
    console.log('Congratulations your score is ', scores[i], '!');
    break;
  }
} 
//Output:
// Your score is  20
// Your score is  10
// Your score is  50
// Your score is  80
// Your score is  30
// Your score is  100
// Congratulations your score is  100 !