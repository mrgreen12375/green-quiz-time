var body = document.body;
//created header element for highscore and timer.
var header = document.createElement('header');
//created anchor element for where the view the highscore will go.
var highScore = document.createElement('a');
//created paragraph element for where timer will go. 
var time = document.createElement('p');
//created main element for start, questions, answers, and initial page. 
var mainSection = document.createElement('main');
//created h1 element for where the questions will go. 
var question = document.createElement('h1');
//created ordered list element for the list of answers.
var answerLi = document.createElement('ol');
//created button element to begin the quiz.
var begin = document.createElement('button');
//created paragraph element for the correct! or wrong! response.
var solution = document.createElement('p');
//setup for later to push questions into asked asked questions.
var pushQuestion;
//setup for begintimer function.
var timeInterval;
//setup begintimer function and for correct funciton - this show the quiz will 60 seconds and count--.
var timeLeft = 60;
var currentScore = 0;
//setup empty arrays to contain selected information.
var askedQuestions = [];
var answer = [];
var userScores = [];

//setup to contain the questions, choices, and answer.
var questionList = [
    {question: "What are arrays wrapped in?", choices: ["( )", "[ ]", "{ }", "' '"], answer: "[ ]"},
     
    {question: "What is an example of an arithmetic operator?", choices: ["<", ">", "+", "==="], answer: "+"},

    {question: "What word does a for loop start with?", choices: ["var", "if", "let", "for"], answer: "for"},

    {question: "What symbols would you use to increment?", choices: ["++", "--", "==", ">>"], answer: "++"},

    {question: "How can you style an element in javascript?", choices: ["for loop", "set attribute", "if statement", "bubbling"], answer: "set attribute"},

    {question: "What number does an index start with?", choices: ["0", "1", "2", "3"], answer: "0"},
];

//created the high score text.
highScore.textContent="View High Scores";
//created the time text + time remaining.
time.textContent="Time: " + timeLeft;
//created the intro text.
question.textContent = "Coding Quiz Challange";
//connects to the scores.html.
highScore.setAttribute("href", "./scores.html");
//created the begin text
begin.textContent = "Begin";
//appended all of the element that were created. 
body.appendChild(header);
header.appendChild(highScore);
header.appendChild(time);
body.appendChild(mainSection);
mainSection.setAttribute('class', '');
mainSection.appendChild(question);
mainSection.appendChild(begin);
mainSection.appendChild(answerLi);
mainSection.appendChild(solution);
//created the function that starts when begin is clicked.
//if the all of the question are completed the quiz is over. 
//the pushQuestions get pushed in to the askedQuestions array. 
//created for loop for the different questions and choices - also connecting to the correct function. 
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
            answer[i].addEventListener('click', correct);
            answerLi.appendChild(answer[i]); 
        }
    } 
}
//created a function to display whether answer was correct or wrong - if wrong subtract 10 sections. 
function correct(event){

    if(pushQuestion.answer == event.target.textContent){
        currentScore++;
        solution.textContent = "Correct!";
    }else{
        solution.textContent = "Wrong!";
        timeLeft -= 10;
    }
    startQuestions();
}
//created function to have the time decrament and end the quiz when the time is zero.
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
//created function to clear the screen for the questions.
function clearScreen(){
    while(answerLi.hasChildNodes()) {
        answerLi.removeChild(answerLi.firstChild);
        question.textContent = '';
    }
}
//created function when the quiz is over.
//displays the amount of correct answers out of six.
//created an input element to put users initals.
//created button element to log users initials and score to scores.html
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