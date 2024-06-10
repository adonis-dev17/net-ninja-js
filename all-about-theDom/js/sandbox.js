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
// const errors = document.querySelectorAll('.error');
// console.log(errors);

//5. get element by ID
// const title = document.getElementById('page-title');
// console.log(title);

//6. get element by class name
// const error = document.getElementsByClassName('error');
// console.log(error);
// console.log(error[0]);

// 7. get elements by tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// 8. if we want to change something with the text

// const para = document.querySelector('p');

// console.log(para.innerText);

// para.innerText = 'Ninjas are Awesome!'; // single text

// 9. If we want to select several text and change them
const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ' new text';
//   // console.log(para.innerText);
// });

// 10. If we want to change the html inside it.
const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML = '<h2>This is the new H2</h2>';//can replae p to h2 content
content.innerHTML += '<h2>This is the new H2</h2>';//can append h2 to p content using +=.







