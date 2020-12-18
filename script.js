
//first I will create functional buttons
// i will start with just an "a" button to test functionality
// I will create all four buttons and listen for click events

//Later, I will have the buttons fill with the answers as variables
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

let questionText = document.querySelector(".question-text")

let nextButton = document.querySelector("#next-button")
nextButton.addEventListener("click", test)

let questionOptions = [
    {
        question: "What is the airspeed velocity of an unladen swallow?"        
    }
    
]
questionText.innerHTML = questionOptions[0].question;
console.log(questionOptions[0].question)