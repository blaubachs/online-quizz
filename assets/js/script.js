// global vars we might need
// let questions = ['how many beans should i eat today?', 'what are one of the best things ever']
// let answers = [[1,2,3,4],["cheese","potatoes"]]
// let correct = ["literal answer or the index position of correct answers"]
//html
    //we can make extra html documents to use

//style
    //need to display the page
        //need to show the question
        //need to show the 4 boxes for answers
        //need the questions and answers to fall in their respective box
    //try to make it look clean

//javascript

//we need to grab some items for javascript:

let timerCountdown = document.querySelector("#timeCountdown")

//we need time-remaining to make a timer
    //example:
        // function setTime() {
        //     // Sets interval in variable
        //     var timerInterval = setInterval(function() {
        //       secondsLeft--;
        //       timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
          
        //       if(secondsLeft === 0) {
        //         // Stops execution of action at set interval
        //         clearInterval(timerInterval);
        //         // Calls function to create and append image
        //         sendMessage();
        //       }
          
        //     }, 1000);
        //   }

function scoreTimer() {
    // defines the number we are going to iterate on
    var secondsLeft = 120;

    var interval = setInterval(function() {
        secondsLeft--; 
        timerCountdown.textContent= ' ' +secondsLeft + ' seconds remaining!'
        if(secondsLeft===0) {
            clearInterval(interval);
        }
    }, 1000);

}



//we need highscore-display to make the high score section appear
    //we can do this by either having another .html page, or we can create/append within our divs we have grabbed to make these appear, we can also basically have our whole page load off js, and elements that we remove we should have re-appear when we play again. 
        // TODO:
            // removing an element example
            // const element = document.getElementById("demo");
            // element.remove();
            // element.removeChild();

let showHighScores = document.querySelector("#highscore-display");

// showHighScores.addEventListener("click", clickme);

function clickme(inputArea) {
    let here = inputArea
    console.log("I have been clicked at "+ here);
}

//we need to question-number so that we can change the text content to the proper question
    //similarly to above, except we should probably change the textContent based on the question in the array that is picked.

    //connected proper element and checked via adding event listener and using the clickme function

    let questionNumber = document.querySelector("#question-number");

let questionContent = document.querySelector("#question-content");

//we need to querySelectorAll the class answer-items for event delegation
    //look at student/instructor demos for examples of this, it will allow us to return things based on a box clicked without writing 4 separate functions for each selected element.
            // example:
            // var pTags = document.querySelectorAll("p");
            // pTags[0].setAttribute("style", "font-size: 40px;");
let answerItemsContainer = document.querySelector("#answer-grid")
console.log('answerItemsContainer: ', answerItemsContainer);

function checkState() {
    let state=element.getAttribute("data-state");

    if (state===""){}
}

answerItemsContainer.addEventListener("click", function(event) {

    let element=event.target;
    let state=element.getAttribute("data-state")

    // Verifying that we are within the correct elements when we click them, and can call a function based on the area clicked.
    if (element.matches("#answer1")) {
        clickme('answer1');
    } else if (element.matches("#answer2")) {
        clickme('answer2');
    } else if (element.matches('#answer3')) {
        clickme('answer3')
    } else if (element.matches('#answer4')) {
        clickme('answer4')
    } else if (element.matches('button')) {
        clickme('startBtn')
    } else {
        clickme('areaBetween')
    }
})

        //function
        //init first question
        //start timer

        //function
        //called when answer selected
        //checks if the answer is right or wrong
        //deducts from timer if wrong
        //prompts that you gave an incorrect answer, indicate to the user the answer was wrong
        //then load next question (separate function)

        //function
        //loads next question

        //function
        //triggers end of game
        //last question being answered or timer hits 0
        //prompts initials
        //saves high scores
        //shows high scores
        //play again button