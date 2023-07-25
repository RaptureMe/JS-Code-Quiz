//Identify the button
var button = document.querySelector("#button");



var questions = [{
    question: "TestQuestion1",
    answer: "TestAnswer1",
    choices: ["TestChoices1","TestChoices2","TestChoices3","TestAnswer1"]
},{
    question: "TestQuestion2",
    answer: "ndTestAnswer2",
    choices: ["ndTestChoices1","ndTestChoices2","ndTestChoices3","ndTestAnswer1"]
}]

var index = 0





function startQuiz(){
// start a timer
var questionSec = document.getElementById("question1")
questionSec.style.display = "block";
var startingPage = document.getElementById("startPage")
startingPage.style.display = "none";

var question1st = questions[0]
var question2nd = questions[1] 
// console.log(questions[0].choices)

var questionTitleEl = document.getElementById("questionTitle");
questionTitleEl.textContent = question1st.question
// select Li's
var stChoice = document.getElementById("1stChoice")
stChoice.textContent = question1st.choices[0];

var ndChoice = document.getElementById("2ndChoice")
ndChoice.textContent = question1st.choices[1];

var rdChoice = document.getElementById("3rdChoice")
rdChoice.textContent = question1st.choices[2];


}

button.addEventListener("click", startQuiz);





/* 

GIVEN I am taking a code quiz
-WHEN I click the start button
--THEN a timer starts and I am presented with a question
WHEN I answer a question
--THEN I am presented with another question
WHEN I answer a question incorrectly
--THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score */
