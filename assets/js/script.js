let questionObject = {
  questions: [
    "Which of the following is NOT a data type in JavaScript?",
    "What can we use to define font types in CSS on a webpage?",
    'What index position do we need to use to return "3" in the array [1,2,3,4]?',
    "Browsers typically apply some default CSS styling. What is it generally called to remove this?",
    'What is the default position "state" of an item on a page?',
  ],
  answerQ: [
    ["String", "Boolean", "Redefined", "Null"],
    ["font-style", "text-decoration", "text-rendering", "font-family"],
    ["0", "1", "2", "3"],
    ["CSS reset", "Style 0", "De-Default", "Un-CSS"],
    ["block", "inline", "flex", "static"],
  ],
  answerCorrect: ["Redefined", "font-family", "2", "CSS reset", "static"],
};

let answerDisplay = document.querySelector("#wrong-answer");
let correctCounter = false;
let chosenAnswer;
let timerCountdown = document.querySelector("#timeCountdown");
let showHighScores = document.querySelector("#highscore-display");
let questionNumber = document.querySelector("#numberText");
let questionContent = document.querySelector("#question-content");
let answerItemsContainer = document.querySelector("#answer-grid");
let startBtn = document.querySelector("#startBtn");
let a;
let secondsLeft = 50;
let qCounter = 0;
let trueCount = 0;

answerDisplay.textContent =
  "If you would like to see high scores, click the link at the top of the page.";

function scoreTimer() {
  timerCountdown.textContent = " " + secondsLeft + " seconds remaining!";

  var interval = setInterval(function () {
    secondsLeft--;
    timerCountdown.textContent = " " + secondsLeft + " seconds remaining!";
    if (secondsLeft <= 0) {
      clearInterval(interval);
      location.replace("./assets/html/highscores.html");
    }
  }, 1000);
}

function startQuiz() {
  answerItemsContainer.addEventListener("click", function (event) {
    if (event.target.nodeName === "LI") {
      if (chosenAnswer === questionObject.answerCorrect[qCounter]) {
        correctCounter = true;
        answerDisplay.textContent =
          "Correct! The correct answer was: " +
          questionObject.answerCorrect[qCounter];
        qCounter++;
        checkEndOfGame();
        nextQuestion(qCounter);
      } else {
        secondsLeft -= 10;
        answerDisplay.textContent =
          "Incorrect! The correct answer was: " +
          questionObject.answerCorrect[qCounter];
        qCounter++;
        checkEndOfGame();
        nextQuestion(qCounter);
      }

      function nextQuestion(a) {
        console.log(a);

        questionNumber.textContent = a + 1;

        questionContent.textContent = questionObject.questions[a];

        for (i = 0; i < 4; i++) {
          answerItemsContainer.children[i].textContent =
            questionObject.answerQ[a][i];
        }
      }
    }
  });

  questionNumber.textContent = qCounter + 1;

  questionContent.textContent = questionObject.questions[0];

  for (i = 0; i < 4; i++) {
    answerItemsContainer.children[i].textContent =
      questionObject.answerQ[qCounter][i];
  }
}

function clickme(inputArea) {
  let here = inputArea;
  console.log("I have been clicked at " + here);
}

startBtn.addEventListener("click", hideButton);
function hideButton() {
  let state = startBtn.getAttribute("data-state");

  if (state === "show") {
    startBtn.dataset.state = "hide";
    startBtn.setAttribute("style", "display:none;");
    startBtn.setAttribute("data-set", "hide");
    scoreTimer();
    startQuiz();
  } else {
    showButton();
  }
}

function showButton() {
  startBtn.setAttribute("data-set", "show");
  startBtn.dataset.state = "show";
  startBtn.setAttribute("style", "display:block;");
}

function clickAnswer(event) {
  let element = event.target;

  if (element.matches("#answer1")) {
    chosenAnswer = element.textContent;
  } else if (element.matches("#answer2")) {
    chosenAnswer = element.textContent;
  } else if (element.matches("#answer3")) {
    chosenAnswer = element.textContent;
  } else if (element.matches("#answer4")) {
    chosenAnswer = element.textContent;
  } else {
  }
}

answerItemsContainer.addEventListener("click", clickAnswer);

function checkEndOfGame() {
  if (secondsLeft <= 0) {
    localStorage.setItem("score", secondsLeft);
    location.replace("./assets/html/highscores.html");
  } else if (qCounter >= 5) {
    localStorage.setItem("score", secondsLeft);
    location.replace("./assets/html/highscores.html");
  }
}
