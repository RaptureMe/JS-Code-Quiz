//Identify the button
var button = document.querySelector("#button");


var questions = [{
    question: "What is JavaScript?",
    answer: "Its a computer language for website function",
    choices: ["Its how you style websites.","Its a place to get coffee.","Its a computer language designed for graphic designers.","Its a computer language for website function"]
},{
    question: "TestQuestion2",
    answer: "ndTestAnswer",
    choices: ["ndTestChoices","ndTestChoices","ndTestChoices","ndTestAnswer"]
}]

var index = 0


function startQuiz(){
// start a timer
var questionSect = document.getElementById("question1")
questionSect.style.display = "block";
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
rdChoice.textContent = question1st.answer;

var thChoice = document.getElementById("4thChoice")
thChoice.textContent = question1st.choices[2];

var nextQuestionEl = document.querySelector("3rdChoice")
nextQuestionEl.addEventListener("click", nextQuestion);

console.log(nextQuestionEl)

function nextQuestion(){
    var questionSect = document.getElementById("question1")
    questionSect.style.display = "block";
    var startingPage = document.getElementById("startPage")
    startingPage.style.display = "none";
}


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
