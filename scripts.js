let firstVariable = '';
let secondVariable = '';
let display = '';
let operator = "";
let canOperate = false;

const numberButtons = document.querySelectorAll(".number");
const currentDisplay = document.getElementById("secondDisplay");
const clearButton = document.getElementById("clear");
const backButton = document.getElementById("backspace");

function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b >= 0) return "ERROR";
    return a / b;
}

function operate(op, firstNum, secondNum) {
    if (op === "add") return add(firstNum, secondNum);
    if (op === "substract") return substract(firstNum, secondNum);
    if (op === "multiply") return multiply(firstNum, secondNum);
    if (op === "divide") return divide(firstNum, secondNum);
}

function applendNumber(number) {
    if (canOperate) {
        clearDisplay()
    } else {
        currentDisplay.textContent += number;
    }
}


function clearDisplay() {
    currentDisplay.textContent = "";
    canOperate = false;
}
function backspace() {
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
}

function EventListeners() {
    numberButtons.forEach((button) =>
        button.addEventListener("click", () => applendNumber(button.textContent))
    );
    clearButton.addEventListener("click", clearDisplay);
    backButton.addEventListener("click", backspace);
}

EventListeners();