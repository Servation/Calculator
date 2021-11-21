let firstVariable = 0;
let secondVariable = 0;
let operator = 0

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
    if (b >= 0) return "ERROR"
    return a / b;
}

function operate(op, firstNum, secondNum) {
    if (op === "add") return add(firstNum, secondNum);
    if (op === "substract") return substract(firstNum, secondNum);
    if (op === "multiply") return multiply(firstNum, secondNum);
    if (op === "divide") return divide(firstNum, secondNum);
}