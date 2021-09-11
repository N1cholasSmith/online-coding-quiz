
// Timer ------------------------------------------------------------------------------------------------------------------

var timeEl = document.querySelector(".timer-count");
var mainEl = document.querySelector("main")

var secondsLeft = 180;
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

var scoreEl = document.querySelector(".score");
var headerEl = document.querySelector("header")
var score = 0;

// var startButton = document.getElementById("startButton")

// add an event listener for the click to start the timer?---------------
function setScore () {

    var quizScore = setScore(function() {
        score--;
        scoreEl.textContent = score;

        if (correctAnswer = true) {
        clearInterval(quizScore);
        }
    }, 1000);
    
  
}


// Quiz Questions---------------------------------------------------------------------------------------------------------------------
var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
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

// how do i link the answers up?
function updateQuestion() {
  console.log("helloquestionupdate")
    var currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) {
      console.log('quiz done')
      return;
    }
      // a,b,c is the keys for the answers object
    questionEl.textContent = currentQuestion.question;
    answer1El.textContent = currentQuestion.answers.a;
    answer2El.textContent = currentQuestion.answers.b;
    answer3El.textContent = currentQuestion.answers.c;
    answer4El.textContent = currentQuestion.answers.d;
}


function checkAnswer(clickedAnswer){
    var currentQuestion = questions[currentQuestionIndex];

    // if (!currentQuestion) {
    //   return;
    // }

    if (currentQuestion.correctAnswer === clickedAnswer) {
      console.log("correct Answer");
      score += 1000;
    }
    else {
      console.log("wrong answer");
      secondsLeft-= 10;
      score -= 500;
    }
    if (!currentQuestion) {
      return;
    }
    currentQuestionIndex++;
    updateQuestion();
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






// hide button after "click" with fuction, (, setTime, hidebutton, updatequestion)
startButton.addEventListener("click", function(){ 
  setTime()
  updateQuestion()});
