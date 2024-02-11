//Set random number
//User input number, and click go
//if user correct the number, print Correct!
//If random number is lower than User number, print Down!
//If random number is higher than User number, print Up!

//If user click the Reset btn, game reset.
//If user try 5 times, game done.(btn disabled)
//We alert that if user type number out range of 1-100. We don't count that chance.
//We alert that id user type same number as before. We don't count that chance.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click",play); //(event,변수(괄호넣지않기))

function pickRandomNum() {
        computerNum = Math.floor(Math.random() * 100) + 1; 
        // Math.random() : pick random number between 0 < Num < 1
        // * 100 : random print decimal number so * 100 > make the random number as two digit left
        // Math.floor() : discard(truncate) the decimal part(소수점 아래 버린다)
        // + 1 : Math.random () print lower than 1, not 1. 
        //      So originally, function has a value between 0-99.
        //      But we need a value between 1-100, so add 1.
        console.log("Answer",computerNum);
    
}

function play() {
        let userValue = userInput.value; //bring value of user-input
        if (userValue < computerNum) {
            resultArea.textContent = "Up!!"
        } else if (userValue > computerNum) {
            resultArea.textContent = "Down!!"
        } else { //(userValue = computerNum)
            resultArea.textContent = "Congratulation!!" 
        }
}

pickRandomNum(); //call function
play();