
var highscoreList = JSON.parse(localStorage.getItem("HighscoreList"))

for (let i = 0; i < highscoreList.length; i++) {
    var paragraph = document.createElement("p")
    paragraph.textContent = highscoreList[i].initials + "         " + highscoreList[i].finalScore
    document.getElementById("highscore").append(paragraph)
}

