//created variables to select the list and store the users scores.
leaderBoard = document.querySelector('ul');
var userScores = [];

//created variable to load the scores in local storage. 
var storedUsers = JSON.parse(localStorage.getItem("userScores"))
    if (storedUsers !== null) {
        userScores = storedUsers;
}

//Created for loop to create the list of users stored scores. 
for(let i=0; i < userScores.length; i++){
    var userScore = document.createElement('li');
    userScore.innerHTML = userScores[i].name + "<span> SCORE: "+userScores[i].score+"</span>";
    leaderBoard.appendChild(userScore);
    window.href 
}