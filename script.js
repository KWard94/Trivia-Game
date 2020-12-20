
//I need to build out my array with more questions
//i need to test the next question button so that it cycles through questions
// 
function test() {
    alert("Congratulations, you clicked a button!")
}


let aButton = document.getElementById("answer-A")
let bButton = document.querySelector("#answer-B")
let cButton = document.querySelector("#answer-C")
let dButton = document.querySelector("#answer-D")


aButton.addEventListener("click", isCorrect);
bButton.addEventListener("click", isCorrect);
cButton.addEventListener("click", isCorrect);
dButton.addEventListener("click", isCorrect);


let questionText = document.querySelector(".question-text")

let nextButton = document.querySelector("#next-button")

let questionArray = [
    {
        question: "What is the airspeed velocity of an unladen swallow?",
        answers: ["15km/hr", "20 km/hr", "African or European Swallow?", "25 km/hr"],
        correctAnsw: "African or European Swallow?",
    },
    {
        question: "test question 2",
        answers: ["incorrect ans", "correct ans", "also incorrect", "third incorrect"],
        correctAnsw: "correct ans",
    },
]
var qNum = 0

questionText.innerHTML = questionArray[qNum].question;

aButton.value = questionArray[qNum].answers[0]
bButton.value = questionArray[qNum].answers[1]
cButton.value = questionArray[qNum].answers[2]
dButton.value = questionArray[qNum].answers[3]

nextButton.addEventListener("click", nextQ)
//look up how to randomize entries in an array, could use to randomize answers

console.log(qNum)
function nextQ() {
    console.log("next button works")
    qNum++
    console.log(qNum)
    return qNum
}

function isCorrect(event) {
        if (event.target.value == questionArray[0].correctAnsw) {
            console.log("Correct Answer Selected!")
            incrementScore();
        }
}

var score = 0
let scoreBoard = document.querySelector("#scoreboard")
scoreBoard.innerHTML = `Your score is: ${score}`


function incrementScore () {
    score = score+10;
    scoreBoard.innerHTML = `Your score is: ${score}`
    console.log("score change")
}

//would hopefully change the button color in correct answer

// function colorButtons () {
// if (isCorrect == true) {
//     document.getElementsByClassName("button").style.backgroundColor = "green";
// } else {
//     document.getElementsByClassName("button").style.backgroundColor= "red";
// }
// }
