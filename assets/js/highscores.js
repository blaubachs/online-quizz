//we need highscore-display to make the high score section appear
//we can do this by either having another .html page, or we can create/append within our divs we have grabbed to make these appear, we can also basically have our whole page load off js, and elements that we remove we should have re-appear when we play again.
// removing an element example
// const element = document.getElementById("demo");
// element.remove();
// element.removeChild();

// EDGE CASES
// -----------------------------------------------
// Check if storage works on other computers and browsers for others.
// Make sure we have no weird edge cases where score<0.
// Make sure that scores are persistant after refreshing page.
// -- this does not mean that they need to be in the same order.
// Make sure proper initials match score.

// showHighScores.addEventListener("click", clickme);

// let initialsInput = initials.value;
let score = localStorage.getItem("score");
let submitButton = document.querySelector("#submit-highscores");
let highscoreArr = [];

// make id's for all list items.. how do we do this?

// function writeToHighScores() {
//   let initials = document.querySelector("#initials").value;
//   let finalScore = [initials, score];
// }

submitButton.addEventListener("click", writeToHighScores);

console.log(initials);
console.log(score);

function listOnPageLoad() {
  let initials = document.querySelector("#initials").value;
  let finalScore = [initials, score];
  let scoreOl = document.querySelector("#highscore-list");
  let scoreLi = document.createElement("li");

  scoreLi.setAttribute("class", "highscore-items");

  scoreLi.appendChild(document.createTextNode(finalScore.join(" => ")));
  scoreOl.appendChild(scoreLi);
  console.log(finalScore);
}
