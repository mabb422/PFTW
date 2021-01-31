const quizOptions = [
    {question: 'What runs around the whole yard without moving?', answer: 'a fence'},
    {question: 'What can you catch but never throw?', answer: 'a cold'},
    {question: 'What travels around the world without ever leaving the corner?', answer: 'a stamp'},
    {question: 'What has many eyes, yet cannot see?', answer: 'potatoes'},
    {question: 'What goes up and down the stairs without ever moving?', answer: 'carpet'},
    {question: 'What has no hinges, lock, or lid, but inside a golden treasure is hid?', answer: 'an egg'},
    {question: 'What follows you wherever you go, but the more of me you take, the more you leave behind?', answer: 'footsteps'},
]
const randomIdx = Math.round(Math.random() * (quizOptions.length - 1));
const question = window.prompt(quizOptions[randomIdx].question);
window.alert('You answered ' + question + '. The correct answer is ' + quizOptions[randomIdx].answer + ".")