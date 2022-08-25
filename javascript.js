var body = document.body;
var header = document.createElement('header');
var highScore = document.createElement('a');
var time = document.createElement('p');
var mainSection = document.createElement('main');
var question = document.createElement('h1');
var answerLi = document.createElement('ol');
var begin = document.createElement('button');
var solution = document.createElement('p');
var pushQuestion;
var timeInterval;
var timeLeft = 60;
var currentScore = 0;
var askedQuestions = [];
var answer = [];
var userScores = [];


var questionList = [
    {question: "What are arrays wrapped in?", choices: ["( )", "[ ]", "{ }", "' '"], answer: "[ ]"},
     
    {question: "What is an example of an arithmetic operator?", choices: ["<", ">", "+", "==="], answer: "+"},

    {question: "What word does a for loop start with?", choices: ["var", "if", "let", "for"], answer: "for"},

    {question: "What symbols would you use to increment?", choices: ["++", "--", "==", ">>"], answer: "++"},

    {question: "How can you style an element in javascript?", choices: ["for loop", "set attribute", "if statement", "bubbling"], answer: "set attribute"},

    {question: "What number does an index start with?", choices: ["0", "1", "2", "3"], answer: "0"},
];

highScore.textContent="View High Scores";
time.textContent="Time: " + timeLeft;
question.textContent = "Coding Quiz Challange.";
highScore.setAttribute("href", "./scores.html");
begin.textContent = "Begin";

body.appendChild(header);
header.appendChild(highScore);
header.appendChild(time);
body.appendChild(mainSection);
mainSection.setAttribute('class', '');
mainSection.appendChild(question);
mainSection.appendChild(begin);
mainSection.appendChild(answerLi);
mainSection.appendChild(solution);

