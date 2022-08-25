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

function startQuestions(){

    clearScreen();
    
    if (questionList.length == 0){
        gameOver();
    }else{
        
        pushQuestion = questionList.pop();
        question.textContent = pushQuestion.question;
        askedQuestions.push(pushQuestion);
        
        for(let i=0; i < pushQuestion.choices.length; i++){
            answer[i] = document.createElement('li');
            answer[i].textContent = pushQuestion.choices[i];
            answer[i].addEventListener('click', isRight);
            answerLi.appendChild(answer[i]); 
        }
    } 
}

function isRight(event){

    if(pushQuestion.answer == event.target.textContent){
        currentScore++;
        solution.textContent = "Correct!";
    }else{
        solution.textContent = "Wrong!";
        timeLeft -= 10;
    }
    startQuestions();
}

function beginTimer() {
    timeInterval = setInterval(function() {
      timeLeft--;
      if(timeLeft < 0){
        timeLeft = 0;
    }
      time.textContent = "Time: " + timeLeft;
  
      if(timeLeft <= 0) {
        gameOver();
      }
    }, 1000);
}

function clearScreen(){
    while(answerLi.hasChildNodes()) {
        answerLi.removeChild(answerLi.firstChild);
        question.textContent = '';
    }
}

function gameOver(){
    clearInterval(timeInterval);

    clearScreen();
    solution.textContent = '';
    
    if (questionList.length == 0){
        question.textContent = "You answered "+ currentScore + " out of 6";
    }else{
        question.textContent = "You answered "+ currentScore + " out of 6";
    }

    userName = document.createElement('input');
    userName.setAttribute('type', 'text');
    userName.setAttribute('placeholder', 'Initials Here')
    solution.appendChild(userName);

    logScore = document.createElement('button');
    logScore.textContent = "Enter High Score";
    mainSection.appendChild(logScore);

    logScore.addEventListener('click', function(){

        var user = {
            name: "N/A",
            score: currentScore,
        }

        newname = userName.value.trim();
        if(newname){
            user.name = newname;
        }

        var storedUsers = JSON.parse(localStorage.getItem("userScores"))
        if (storedUsers !== null) {
            userScores = storedUsers;
            console.log(userScores);
        }
        userScores.push(user);
        localStorage.setItem("userScores", JSON.stringify(userScores));
        window.location.href = 'scores.html';
    })
}

begin.addEventListener("click", function(){
    beginTimer();
    startQuestions();
    begin.remove();
});