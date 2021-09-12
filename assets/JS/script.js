


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


function updateQuestion() {
  console.log("QUESTION")
    rules.setAttribute("class", "hidden");
    quiz.removeAttribute("class");
    var currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) {
      console.log('quiz done')
      // localStorage.setItem("mostRecentScore", score)
      // return window.location.assign("highscores.html")----------------------------------- prompt or submit button
    }

    // if (currentQuestionIndex = questions.length) {
    //   endQuiz()
    // }

    // if (secondsLeft === 0) {
    //   endQuiz()
    // }
  
      // a,b,c is the keys for the answers object
    questionEl.textContent = currentQuestion.question;
    answer1El.textContent = currentQuestion.answers.a;
    answer2El.textContent = currentQuestion.answers.b;
    answer3El.textContent = currentQuestion.answers.c;
    answer4El.textContent = currentQuestion.answers.d;
}


function checkAnswer(clickedAnswer){
    var currentQuestion = questions[currentQuestionIndex];

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
answer3El.addEventListener("click", function (){
  checkAnswer("d");
});

function endQuiz() {
  rules.setAttribute("class", "hidden");
  quiz.removeAttribute("class");

  console.log("end Quiz")
  
}

// -SUBMIT BUTTON/STORE HIGHSCORE---------------------------------------------------------
// var initials = document.querySelector("#initials");
// var finalscore = document.querySelector("#finalScore");
// var submit = document.querySelector("#submit");
// var todoCountSpan = document.querySelector("#todo-count");

// var highscore = [];

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();

//   var intials = document.querySelector("#intials").value;

//   if (initials === "") {
//     renderMessage("Initials cannot be left blank");
//   } else {
//     var highscoreObj = {
//       initials: initials,
//       score: finalScore
//     }


//     highscoreList.push(highscoreObj);

//     localStorage.setItem("HighscoreList", JSON.stringify(highscoreList));
//     window.location.href = "highscores.html";
//   }
// });

// // ----RENDER HIGHSCORES to HIGHSCORE.HTML--------------------------------------

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }

// // This function is being called below and will run when the page loads.
// function init() {
//   // Get stored todos from localStorage
//   var storedTodos = JSON.parse(localStorage.getItem("todos"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }

//   // This is a helper function that will render todos to the DOM
//   renderTodos();
// }

// function storeTodos() {
//   // Stringify and set key in localStorage to todos array
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Add submit event to form
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

// // Add click event to todoList element
// todoList.addEventListener("click", function(event) {
//   var element = event.target;

//   // Checks if element is a button
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });

// // Calls init to retrieve data and render it to the page on load
// init()


// hide button after "click" with fuction, (, setTime, hidebutton, updatequestion)
startButton.addEventListener("click", function(){ 
  setTime()
  updateQuestion()});
