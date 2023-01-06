// EDGE CASES
// -----------------------------------------------
// Check if storage works on other computers and browsers for others.
// Make sure we have no weird edge cases where score<0.
// Make sure that scores are persistant after refreshing page.
// -- this does not mean that they need to be in the same order.
// Make sure proper initials match score.

let submitButton = document.querySelector("#submit-highscores");
let initialInput = document.querySelector("#initials");

let score = localStorage.getItem("score");

let scoreOl = document.querySelector("#highscore-list");

let highScoreArr = [];

if (score < 0) {
  score = 0;
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  let initialsText = initialInput.value.trim();
  let scoreString = initialsText + " => " + score;

  if (initialsText === "") {
    return;
  }

  console.log("highscore array before push" + highScoreArr);

  highScoreArr.push(scoreString);

  initialInput.value = "";

  console.log("highscore array after push" + highScoreArr);

  storeScores();
  createList();
});

// create list items
function createList() {
  scoreOl.innerHTML = "";

  for (let i = 0; i < highScoreArr.length; i++) {
    let listText = highScoreArr[i];
    let createLi = document.createElement("li");

    createLi.textContent = listText;
    createLy.setAttribute("style", "list-style:circle;");

    scoreOl.appendChild(createLi);
  }
}

// initializes at page load
function init() {
  let storedScores = JSON.parse(localStorage.getItem("highScoreArr"));

  console.log("init has run");

  console.log("storedScores on page load = " + storedScores);

  if (storedScores !== null) {
    highScoreArr = storedScores;
  }

  // fillList();
}

// store scores
function storeScores() {
  localStorage.setItem("highScoreArr", JSON.stringify(highScoreArr));
}

// run init to load list items into array
init();
