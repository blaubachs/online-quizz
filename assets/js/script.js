let questionObject = {
    questions: ['how many beans should i eat today?', 'what are one of the best things ever'],
    answerQ:[["1 bean","2 beans","3 beans","4 beans"],["cheese","my cat","potatoes","beans"]],
    answerCorrect:["2 beans", "my cat"],
}

let correctCounter=false;
let chosenAnswer
let timerCountdown = document.querySelector("#timeCountdown");
let showHighScores = document.querySelector("#highscore-display");
let questionNumber = document.querySelector("#numberText");
let questionContent = document.querySelector("#question-content");
let answerItemsContainer = document.querySelector("#answer-grid");
let startBtn = document.querySelector("#startBtn");
let a
startBtn.addEventListener("click", hideButton);

function scoreTimer() {
    var secondsLeft = 120;

    var interval = setInterval(function() {
        secondsLeft--; 
        timerCountdown.textContent= ' ' +secondsLeft + ' seconds remaining!'
        if(secondsLeft===0) {
        clearInterval(interval);
        }
    }, 1000);

}

function startQuiz() {
answerItemsContainer.addEventListener("click", function(event){

    if (event.target.nodeName === "LI"){

        if (chosenAnswer===questionObject.answerCorrect[qCounter]) {
            correctCounter=true;
            qCounter++
            console.log('qCounter++: ', qCounter);
            nextQuestion(qCounter);
            console.log("truth")
        } else {
            console.log("wrONG")
        }

        function nextQuestion(a) {

            console.log(a)
        
            questionNumber.textContent= a+1
            console.log('questionNumber.textContent= a+1: ', questionNumber.textContent= a+1);
        
            questionContent.textContent= questionObject.questions[a]
            console.log('questionContent.textContent= questionObject.questions[a]: ', questionContent.textContent= questionObject.questions[a]);
        
            for (i=0; i<4; i++) {
            answerItemsContainer.children[i].textContent=questionObject.answerQ[a][i]
            }
        }
}
})

    let qCounter=0

    questionNumber.textContent= qCounter+1

    questionContent.textContent= questionObject.questions[0]

    for (i=0; i<4; i++) {
    answerItemsContainer.children[i].textContent=questionObject.answerQ[qCounter][i]
    }

}

//we need highscore-display to make the high score section appear
    //we can do this by either having another .html page, or we can create/append within our divs we have grabbed to make these appear, we can also basically have our whole page load off js, and elements that we remove we should have re-appear when we play again. 
         // removing an element example
         // const element = document.getElementById("demo");
         // element.remove();
         // element.removeChild();


// showHighScores.addEventListener("click", clickme);

function clickme(inputArea) {
    let here = inputArea
    console.log("I have been clicked at "+ here);
}

function hideButton() {
    let state=startBtn.getAttribute("data-state");

    if (state==="show") {
        startBtn.dataset.state="hide"
        startBtn.setAttribute("style", "display:none;")
        startBtn.setAttribute("data-set", "hide")
        scoreTimer()
        startQuiz();
    } else {
        showButton()
    }

}

function showButton() {    
    startBtn.setAttribute("data-set", "show");
    startBtn.dataset.state="show";
    startBtn.setAttribute("style", "display:block;");
}

function clickAnswer(event){

    let element=event.target;

    if (element.matches("#answer1")) {
        chosenAnswer=element.textContent;
    } else if (element.matches("#answer2")) {
        chosenAnswer=element.textContent;
    } else if (element.matches('#answer3')) {
        chosenAnswer=element.textContent;
    } else if (element.matches('#answer4')) {
        chosenAnswer=element.textContent;
    } else {

    }
}

answerItemsContainer.addEventListener("click", clickAnswer);

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