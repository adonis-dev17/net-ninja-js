// //1. getting and changing classes
// const content = document.querySelector('p');

// console.log(content.classList);//to display the classList
// content.classList.add('error');//to add classes
// content.classList.remove('error');//to remove classes
// content.classList.add('success');//to add success class

// 2. to tag error or success if any of the p tags includes those words.
const sentence = document.querySelectorAll('p');

sentence.forEach(pTag => {
  // pTag.classList.;
  // console.log(pTag.textContent);
  if(pTag.textContent.includes('error')) { //use textContent instaed of innerText
    pTag.classList.add('error');
  }
  if (pTag.innerText.includes('success')) {//you can use innerText
    pTag.classList.add('success');
  }
});

// 3. To toggle classes
const title = document.querySelector('.title');

title.classList.toggle('test');//it adds title in the class
title.classList.toggle('test');//here it removes the class





