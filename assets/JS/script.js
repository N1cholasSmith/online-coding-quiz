


// Timer ------------------------------------------------------------------------------------------------------------------

var timeEl = document.querySelector(".timer-count");
var mainEl = document.querySelector("main")

var secondsLeft = 30;
var startButton = document.getElementById("startButton")

// add an event listener for the click to start the timer?---------------
function setTime () {

  var timerInterval = setInterval(function() {
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
    },
    {

}];


function updateQuestion() {
  console.log("QUESTION")
  console.log("current question index: ",currentQuestionIndex)
  var currentQuestion = questions[currentQuestionIndex];
    
    if (!currentQuestion) {
      console.log('quiz done')
      endQuiz();
    }
    // if (currentQuestionIndex >= questions.length) {
    //   endQuiz();
    // }
    currentQuestionIndex++;
  
  
    questionEl.textContent = currentQuestion.question;
    answer1El.textContent = currentQuestion.answers.a;
    answer2El.textContent = currentQuestion.answers.b;
    answer3El.textContent = currentQuestion.answers.c;
    answer4El.textContent = currentQuestion.answers.d;
}


function checkAnswer(clickedAnswer){
  var currentQuestion = questions[currentQuestionIndex];
  // currentQuestionIndex++;
  
    if (currentQuestionIndex >= questions.length) {
      endQuiz();

    } else {
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
  rules.setAttribute("class", "hidden");
  quiz.removeAttribute("class", "hidden");
  allDone

  console.log("end Quiz")
  
  allDone.setAttribute("class", "show")
  quiz.setAttribute("class", "hidden")
}

//  SUBMIT DETAILS/STORE LOCAL STORAGE -------------------------------------------------------------------------------------------------------

localStorage.getItem("score")
localStorage.setItem("score", score)
var highscoreList

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()

   //1. create an object of user's name and score. {name: "bob", score: 1000}
  var intials = document.querySelector("#intials").value;

    if (initials === "") {
      renderMessage("Initials cannot be left blank");
    } else {
      var highscoreObj = {
        initials: initials,
        score: finalScore
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
});
