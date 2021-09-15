// need to stop time when last question answered,
// submit to localstorage
// parse


// Timer ------------------------------------------------------------------------------------------------------------------

var timeEl = document.querySelector(".timer-count");
var mainEl = document.querySelector("main")

var secondsLeft = 30;
var startButton = document.getElementById("startButton")
var timerInterval 
// add an event listener for the click to start the timer?---------------
function setTime () {

  timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
        clearInterval(timerInterval);
        }
  }, 1000);
    
  
}

// --Score-------------------------------------------------------------------------------------

var scoreEl = document.querySelector("#score");
var headerEl = document.querySelector("main");
var score = 0;
var finalScore = score;
var score_points = 1000;

incrementScore = num => {
  score +=num
  scoreText.innertext = score

}

// Quiz Questions---------------------------------------------------------------------------------------------------------------------
var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var answer5El = document.getElementById("answer5");
var currentQuestionIndex = 0;

var questions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"

      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
}];

// UPDATE QUESTION----------------------------------------------------------------------------------------
function updateQuestion() {
  console.log("QUESTION")
  console.log("current question index: ",currentQuestionIndex)
  var currentQuestion = questions[currentQuestionIndex];
    
    if (!currentQuestion) {
      console.log('quiz done')
      endQuiz();
    }
  
    questionEl.textContent = currentQuestion.question;
    answer1El.textContent = currentQuestion.answers.a;
    answer2El.textContent = currentQuestion.answers.b;
    answer3El.textContent = currentQuestion.answers.c;
    answer4El.textContent = currentQuestion.answers.d;
}

// CHECK QUESTION------------------------------------------------------------------------------------------
function checkAnswer(clickedAnswer){
  var currentQuestion = questions[currentQuestionIndex];
  // currentQuestionIndex++;
  
    
      if (currentQuestion.correctAnswer === clickedAnswer) {
        console.log("correct Answer");
        console.log("score +1000")
        score += 1000
        scoreEl.textContent = score;
      }
      else {
        console.log("wrong answer");
        console.log("score -500")
        secondsLeft-= 10;
        score -= 500;
        scoreEl.textContent = score;
      }
      if (!currentQuestion) {
        return;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex >= questions.length) {
        endQuiz();
      } else {
      updateQuestion();
    } 

}

answer1El.addEventListener("click", function (){
    checkAnswer("a");
});
answer2El.addEventListener("click", function (){
    checkAnswer("b");
});
answer3El.addEventListener("click", function (){
    checkAnswer("c");
});
answer4El.addEventListener("click", function (){
    checkAnswer("d");
});

//  END QUIZ ----------------------------------------------------------------------------------------------------------------------------
// document.getElementById("rules").style.display="none";
// document.getElementById("quiz").style.display= "none";

function endQuiz() {
 
  clearInterval(timerInterval);
  console.log("endquiz")
  allDone.removeAttribute("class");
  document.getElementById("quiz").setAttribute("class","hidden")
  scoreEl.textContent = score;
 
}
//  SUBMIT DETAILS/STORE LOCAL STORAGE -------------------------------------------------------------------------------------------------------

localStorage.getItem("score")
localStorage.setItem("score", score)
var highscoreList = []

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()
  console.log("submitscore")
   //1. create an object of user's name and score. {name: "bob", score: 1000}
  var initials = document.getElementById("initials").value

    if (initials === "") {
      alert("Initials cannot be left blank");
    } else {
      var highscoreObj = {
        initials: initials,
        finalScore: score
      }
      //2. stick in localStorage under key "score"
      highscoreList.push(highscoreObj);
  
      //3. window.location.href = "highscores.html";
      localStorage.setItem("HighscoreList", JSON.stringify(highscoreList));
      window.location.href = "highscores.html";
    }
});


// hide button after "click" with fuction, (, setTime, hidebutton, updatequestion)
startButton.addEventListener("click", function(){ 
  setTime()
  updateQuestion()
  rules.setAttribute("class", "hidden");
  // startButton.setAttribute("class", "hidden")
})
