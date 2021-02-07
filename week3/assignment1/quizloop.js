let questionInput;
let response;
let responseColor = 'purple';
let heading;
let statements = [
    { question: 'What runs around the whole yard without ever moving?', answer: 'a fence'},
    { question: 'What can you catch but never throw?', answer: 'a cold'},
    { question: 'What travels around the world without ever leaving the corner?', answer: 'a stamp'},
    { question: 'What has many eyes, yet cannot see?', answer: 'potatoes'},
    { question: 'What goes up and down the stairs without ever moving?', answer: 'carpet'},
    { question: 'What has no hinges, lock, or lid, but inside a golden treasure is hid?', answer: 'an egg'},
    { question: 'What follows you wherever you go, but the more of me you take, the more you leave behind?', answer: 'footsteps'},
];
function next() {
    if(statements.length < 1) {
        alert('you won');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}
function checkQuestion() {
    if (currentQuestion.answer === input.value()) {
        //remove correct answer from array
        statements = statements.filter(statementObj => {
            return currentQuestion.answer!== statementObj.answer;
        });
        //correct condition
        response = 'Correct! Next Riddle:';
        responseColor = 'green'
    } else {
        //wrong condition
        response = 'Sorry, that is incorrect. Lets try another one:';
        responseColor = 'red'
    }
}
let currentQuestion = next();
let message = currentQuestion.question;
function setup() {
    createCanvas(1000, 1000);
    background('pink');
    heading = createElement('hi', ['Riddle:']);
    heading.position(105, 250);
    questionInput = createInput('');
    questionInput.size(250, 24);
    questionInput.position(105, 350);
    submitButton = createButton("Answer");
    submitButton.size(100, 24);
    submitButton.position(105, 400);
}
function draw() {
    fill('purple');
    textSize (24);
    text(message, 100, 300);
    fill(reposnseColor);
    text(response, 100, 350);
}
const question = window.prompt(quizOptions[randomIdx].question);
window.alert('You answered ' + question + '. The correct answer is ' + quizOptions[randomIdx].answer + ".")
