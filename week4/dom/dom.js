// select empty div from HTML and assign to variable
const myEmptyDiv = document.querySelector(myEmptyDiv);
// put h1 inside of it
// create new element
const heading = document.createElement('h1');
heading.innerHTML - 'Hello!';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    console.log('Heading had been clicked');
    document.body.style.backgroundColor = 'yellow';
}
