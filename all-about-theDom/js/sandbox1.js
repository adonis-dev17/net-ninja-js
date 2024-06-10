//1. get attribute
const link = document.querySelector('a');

console.log(link.getAttribute('href'));

//2. if we change attribute and the text
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

