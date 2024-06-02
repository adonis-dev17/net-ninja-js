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
let i = 5;
do {
  console.log('val of i is: ', i);
  i++;
} while(i<5);
//Output: val of i is:  5
