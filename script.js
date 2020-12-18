
//first I will create functional buttons
// i will start with just an "a" button to test functionality
// I will create all four buttons and listen for click events

//Later, I will have the buttons fill with the answers as variables

//^^DONE^^

//I need to populate answers onto the buttons for a,b,c,d
//I need to build out my array with more questions
//i need to test the next question button so that it cycles through questions
// 
function test() {
    alert("Congratulations, you clicked a button!")
}

let aButton = document.querySelector("#answer-A")
let bButton = document.querySelector("#answer-B")
let cButton = document.querySelector("#answer-C")
let dButton = document.querySelector("#answer-D")

aButton.addEventListener("click", test);
bButton.addEventListener("click", test);
cButton.addEventListener("click", test);
dButton.addEventListener("click", test);

let scoreBoard = document.querySelector("#scoreboard")
scoreBoard.innerHTML = `Your score is: `

let questionText = document.querySelector(".question-text")

let nextButton = document.querySelector("#next-button")
nextButton.addEventListener("click", test)

let questionArray = [
    {
        question: "What is the airspeed velocity of an unladen swallow?",
        answerA: "15km/hr",
        answerB: "20 km/hr", 
        answerC: "Is it an African or European swallow?",
        answerD: "25 km/hr",       
    }
    
]
questionText.innerHTML = questionArray[0].question;

aButton.value = questionArray[0].answerA
bButton.value = questionArray[0].answerB
cButton.value = questionArray[0].answerC
dButton.value = questionArray[0].answerD