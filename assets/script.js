//Identify the button
var button = document.querySelector("#button");

var questions = [
  {
    questionTitle: "What is JavaScript?",
    answer: "Its a computer language for website function",
    choices: [
      "Its how you style websites.",
      "Its a place to get coffee.",
      "Its a computer language designed for graphic designers.",
      "Its a computer language for website function",
    ],
  },
  {
    questionTitle: "TestQuestion2",
    answer: "ndTestAnswer",
    choices: [
      "ndTestChoices",
      "ndTestChoices",
      "ndTestChoices",
      "ndTestAnswer",
    ],
  },
];

var index = 0;
var score = 0;

function startQuiz() {
  // start a timer
  var questionSect = document.getElementById("question1");
  questionSect.style.display = "block";
  var startingPage = document.getElementById("startPage");
  startingPage.style.display = "none";

  var question = questions[0];
  // console.log(questions[0].choices)

  var questionTitleEl = document.getElementById("questionTitle");
  questionTitleEl.textContent = question.questionTitle;
  // select Li's
  var stChoice = document.getElementById("1stChoice");
  stChoice.textContent = question.choices[0];

  var ndChoice = document.getElementById("2ndChoice");
  ndChoice.textContent = question.choices[1];

  var rdChoice = document.getElementById("3rdChoice");
  rdChoice.textContent = question.answer;

  var thChoice = document.getElementById("4thChoice");
  thChoice.textContent = question.choices[2];

  var nextQuestionEl = document.getElementById("3rdChoice");
  nextQuestionEl.addEventListener("click", nextQuestion);

  function nextQuestion() {
    var questionSect = document.getElementById("question1");
    questionSect.style.display = "none";
    var startingPage = document.getElementById("question2");
    startingPage.style.display = "block";
    var questionTitleEl = document.getElementById("questionTitle");
    questionTitleEl.textContent = question2nd.questionTitle;
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
