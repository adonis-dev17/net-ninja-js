// 1. The query selector
// const para = document.querySelector('body > div.error');
// console.log(para);

// 2. The query selector all
// const paras = document.querySelectorAll('p');//will get all of the p tags and store it

// // 3. using foreach to load each node or can use bracket to log specific node.
// paras.forEach(para => {
//   console.log(para);
// });
// console.log(paras[2]);

// 4. using element to load all under the same class
const errors = document.querySelectorAll('.error');
console.log(errors);