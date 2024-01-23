//created variables to select the list and store the users scores.
var leaderBoard = document.querySelector('ul');
var clear = document.querySelector('#clear');

//created variable to load the scores in local storage. 
var userScores = JSON.parse(localStorage.getItem("userScores"));

//Created for loop to create the list of users stored scores. 
for(let i=0; i < userScores.length; i++){
    var userScore = document.createElement('li');
    userScore.innerHTML = userScores[i].name + "<span> SCORE: " + userScores[i].score + "</span>";
    leaderBoard.appendChild(userScore);
}

function clearHighScores() {
    window.localStorage.removeItem('userScores');
    window.location.reload();
}
  
clear.addEventListener('click', clearHighScores);