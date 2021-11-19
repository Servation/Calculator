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

function operate(operator, firstNum, secondNum) {
    if (operator === "add") return add(firstNum, secondNum);
}