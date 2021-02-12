// select empty div from HTML and assign to variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');
// put h1 inside of it
// create new element
const heading = document.createElement('h1');
heading.innerHTML - 'Did you know llamas can serve as herd guards? That\'s llamazing!';
heading.style.cursor = 'ponter';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = 'yellow';
}
