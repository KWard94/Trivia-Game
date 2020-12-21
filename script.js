//I need to build out my array with more questions
//i need to test the next question button so that it cycles through questions

let aButton = document.querySelector("#answer-A");
let bButton = document.querySelector("#answer-B");
let cButton = document.querySelector("#answer-C");
let dButton = document.querySelector("#answer-D");

let buttonClass = document.querySelector(".button");

aButton.addEventListener("click", isCorrect);
bButton.addEventListener("click", isCorrect);
cButton.addEventListener("click", isCorrect);
dButton.addEventListener("click", isCorrect);

let questionText = document.querySelector(".question-text");

let nextButton = document.querySelector("#next-button");

let questionArray = [
//   {
//     question: "Sample Question?",
//     answers: ["incorrect", "incorrect", "Correct", "incorrect"],
//     correctAnsw: "Correct",
//   },
  {
    question: "How many ghosts show up in A Christmas Carol?",
    answers: ["One", "Two", "Three", "Four"],
    correctAnsw: "Four",
  },
  {
    question:
      "Which Hollywood actor played six different roles in The Polar Express?",
    answers: ["Tom Hanks", "Peter Scolari", "Leslie Zemeckis", "Tim Allen"],
    correctAnsw: "Tom Hanks",
  },
  {
    question:
      "How many sizes does the Grinch's heart grow once he gets feelings?",
    answers: ["Two Sizes", "Three Sizes", "Four Sizes", "Five Sizes"],
    correctAnsw: "Three Sizes",
  },
  {
    question: "What is the highest grossing Christmas movie of all time?",
    answers: ["Home Alone", "Elf", "The Grinch", "The Santa Clause"],
    correctAnsw: "The Grinch",
  },
  {
    question: "What Christmas song has appeared in the most movies?",
    answers: ["Jingle Bells", "Santa Baby", "Silver Bells", "O Holy Night"],
    correctAnsw: "Jingle Bells",
  },
];

var qNum = 0;

function nextQ() {
    aButton.style.backgroundColor = "#007ea7";
    bButton.style.backgroundColor = "#007ea7";
    cButton.style.backgroundColor = "#007ea7";
    dButton.style.backgroundColor = "#007ea7";
    console.log("next button works");
    qNum += 1;
    console.log(`the variable qNum is ${qNum}`);
    questionText.innerHTML = questionArray[qNum].question;

    aButton.value = questionArray[qNum].answers[0];
    bButton.value = questionArray[qNum].answers[1];
    cButton.value = questionArray[qNum].answers[2];
    dButton.value = questionArray[qNum].answers[3];
    return qNum;
}

// nextQ();
console.log("the initial qNum variable is " + qNum);

//when I call the nextQ function the question changes, but the qNum variable does not change
// nextQ()

questionText.innerHTML = questionArray[qNum].question;

aButton.value = questionArray[qNum].answers[0];
bButton.value = questionArray[qNum].answers[1];
cButton.value = questionArray[qNum].answers[2];
dButton.value = questionArray[qNum].answers[3];

nextButton.addEventListener("click", nextQ);
//look up how to randomize entries in an array, could use to randomize answers

var score = 0;
let scoreBoard = document.querySelector("#scoreboard");
scoreBoard.innerHTML = `Your score is: ${score}`;

//will have to change the questionArray index to a variable if I get the nextQ function working

//maybe include a style change for correct/incorrect answers in this function?
function isCorrect(event) {
  if (event.target.value == questionArray[qNum].correctAnsw) {
    console.log("Correct Answer Selected!");
    incrementScore();
    event.target.style.backgroundColor = "green";
    // return true;
  } else {
    event.target.style.backgroundColor = "red";
    decrementScore();
    console.log("incorrect!");
    // return false
  }
}

function incrementScore() {
  score = score + 10;
  scoreBoard.innerHTML = `Your score is: ${score}!`;
  if (score >= 50) {
    alert("Winner Winner Holiday Dinner!");
  }
}

function decrementScore() {
  score = score -= 5;
  scoreBoard.innerHTML = `Your score is: ${score}!`;
}

//would hopefully change the button color in correct answer
// function colorButtons () {
// if (isCorrect == true) {
//     console.log("turn green")
//     document.getElementsByClassName("button").style.backgroundColor = "green"
// } else {
//     console.log("turn red")
//     document.getElementsByClassName("button").style.backgroundColor= "red";
// }
// }
