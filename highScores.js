leaderBoard = document.querySelector('ul');
var userScores = [];

//Loads saved local data
var storedUsers = JSON.parse(localStorage.getItem("userScores"))
    if (storedUsers !== null) {
        userScores = storedUsers;
}

//Creates list of items for parsed storedUser
for(let i=0; i < userScores.length; i++){
    var userScore = document.createElement('li');
    userScore.innerHTML = userScores[i].name + "<span> SCORE: "+userScores[i].score+"</span>";
    leaderBoard.appendChild(userScore);
    window.href 
}