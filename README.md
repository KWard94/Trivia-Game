# Christmas Movie Trivia Game!

A game in HTML, CSS, and JavaScript. This trivia game is based on Christmas Movie trivia questions found on the web.

View the fully deployed version here: https://kward94.github.io/Trivia-Game-JavaScript-/

## Wire Frame

![image](https://user-images.githubusercontent.com/75279409/102917852-289ff000-4443-11eb-9ebd-3e36221321cd.png)

## Screenshots of Live App
### Instructions Modal
![image](https://user-images.githubusercontent.com/75279409/102942397-75e78600-4472-11eb-82ee-4539e6ad9a87.png)

### Banner/Header
![image](https://user-images.githubusercontent.com/75279409/102942327-4c2e5f00-4472-11eb-8f25-8cf404658ec7.png)

### Game Window
![image](https://user-images.githubusercontent.com/75279409/102942672-38372d00-4473-11eb-9b53-ec78e3520755.png)

## User Stories

### MVP
- As a player, I would like for this to be a trivia game with multiple questions and multiple choice answers.

- As a player, I would like for this game to have buttons that are interactable and respond when clicked.

- As a player, I would like for this game to display if the user (player) has answered correctly or incorrectly.

- As a player, I would like for this game to have controls to move to the next question.

- As a player, I would like this game to track the user's score.

- As a player, I would like this game to display the user's score as they play

- As a player, I would like this game to be styled in a way that is pleasing to the eye, and looks complete.

### Stretch Goals
- As a player, I would like the questions for this game to be randomized in order to keep the gameplay fresh

- As a player, I would like this game to have a pool of questions to pull from so the game will be slightly different each time.

- As a player, I would like this game to change colors of the buttons if I have answered correctly or incorrectly.

- As a player, I would like this game to display a "congratulations" modal upon completion of the game.

-  As a player, I would like this game to have a "welcome" screen/window

- As a player, I would like for this game to be dynamic and adaptable to smaller screens.


### Notes on My Challenges:
- I ran into issues trying to get my options for answers to populate into my buttons. I realized that I needed to populate into my button "values" instead of "innerHTML".

- I also encountered issues with scope, both in my "next button" and in my incrementation in score. I was able to fix those with some guidance and help from office hours.

- I ran into a silly error when deploying my website where an image would not populate properly due to an extra "/" in my image source. The issue did not occur in my live server through VSCode, but it did present a 404 error when deployed.

- One major issue I ran into was that I wanted to write more DRY code by using a for loop to populate my questions, but I was not able to get it working. Instead I chose to hard code some processes, in order to ensure proper functionality.

- I had some difficulty with deploying my page, as the spacing and styling changed slightly from my live server. Initially my image also did not show up on the deployed game, but it did on the live server.



### What I learned:
- I was able to simplify my code and get certain functionality working by creating functions that were more complex and included more steps per funcion, rather than having multiple functions to run at different times or from different stimuli.

- I definitely got some practice rewriting my code to include a local scope/variable to influence my global variables.

- I was able to create a win condition screen with a button to restart the game by using DOM manipulation and an extra element in my array, rather than creating a complex moodal or a completely new screen. This also helped the "win" screen feel integrated into the game.



### What I would do differently next time:
- I would try to write a more DRY code instead of hard coding my process.

## Getting Started:

Check it out! Fork, clone, and run the application.