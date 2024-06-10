//1. get attribute
const link = document.querySelector('a');

console.log(link.getAttribute('href'));

//2. if we change attribute and the text
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

// 3. another getting and changing attribute name
const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');//change class name to success
console.log(mssg.getAttribute('class'));

// 4. you can add an attribute even if it is not available in html
mssg.setAttribute('style', 'color: green');




