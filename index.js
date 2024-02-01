let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let resultOfGame = document.getElementById("gameResult");

function restartButtonFunction() {
    let firstRondomNumber = Math.random() * 100;
    firstRondomNumber = Math.ceil(firstRondomNumber);
    firstNumber.textContent = firstRondomNumber;

    let secondRandomNumber = Math.random() * 100;
    secondRandomNumber = Math.ceil(secondRandomNumber);
    secondNumber.textContent = secondRandomNumber;

    resultOfGame.textContent = "";
    userInput.value = "";
}
restartButtonFunction();

function checkButtonFunction() {
    let FirstRondomNumber = parseInt(firstNumber.textContent);
    let secondRandomNumber = parseInt(secondNumber.textContent);
    let input = parseInt(userInput.value);
    let sumOfNumbers = FirstRondomNumber + secondRandomNumber;

    if (sumOfNumbers === input) {
        resultOfGame.textContent = "Congratulations! You got it right.";
        resultOfGame.style.backgroundColor = "#028a0f";
    } else {
        resultOfGame.textContent = "Please Try Again!";
        resultOfGame.style.backgroundColor = "#1e217c"
    }


}