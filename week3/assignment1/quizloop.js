let questionInput;
let heading;
let response;
let responseColor;
let statements = [
    { question: 'What runs around the whole yard without ever moving?', answer: 'a fence'},

];
function next() {
    if(statements.length < 1) {
        alert('You Won!');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}
function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        //remove correct answer from array
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        //correct condition
        response = 'Correct! Next Riddle:';
        responseColor = 'green';
    } else {
        //wrong condition
        response = 'Sorry, that is incorrect. Lets try another one:';
        responseColor = 'red';
    }
    currentQuestion = next();
    questionInput.value('');
    if(currentQuestion) {
        message = currentQuestion.question;
    }
}
let currentQuestion = next();
let message = currentQuestion.question;
function setup() {
    createCanvas(1000, 1000);
    heading = createElement('hi', ['Riddle:']);
    heading.position(105, 200);
    questionInput = createInput('');
    questionInput.size(250, 24);
    questionInput.position(105, 350);
    submitButton = createButton("Answer");
    submitButton.size(100, 24);
    submitButton.mousePressed(checkQuestion);
    submitButton.position(105, 400);
}
function draw() {
    background('pink');
    fill('purple');
    textSize (24);
    text(message, 100, 300);
    fill(responseColor);
    text(response, 100, 250);
}