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

let score = localStorage.getItem("score");
let submitButton = document.querySelector("#submit-highscores");
let initialInput = document.querySelector("#initials");
let highscoreArr = [];

// make id's for all list items.. how do we do this?

function writeToHighScores() {}

console.log(score);

if (score < 0) {
  score = 0;
}

// submitButton.addEventListener("click", writeToHighScores);
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  let initialsText = initialInput.value.trim();

  if (initialsText === "") {
    console.log("returning...");
    return;
  }

  highscoreArr.push(initialsText);
  highscoreArr.push(score);

  initialInput.value = "";

  console.log(highscoreArr);
});

console.log(initials);
console.log(score);

// function submitInitials() {
//   localStorage.getItem(initials);

//   let finalScore = [initialsValue, score];

//   console.log(initialsValue);
//   console.log("finalscore" + finalScore);

//   return finalScore;
// }

// let pushArr = [];

// pushArr += highscoreArr.push(finalScore);
// console.log(highscoreArr);

// let scoreOl = document.querySelector("#highscore-list");
// let scoreLi = document.createElement("li");

// // have to do this in a for loop, probably
// // might push the array of finalScore to an array to populate li items with
// scoreLi.setAttribute("class", "highscore-items");

// scoreLi.appendChild(document.createTextNode(finalScore.join(" => ")));
// scoreOl.appendChild(scoreLi);
// console.log(finalScore);
