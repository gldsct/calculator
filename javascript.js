function add(firstNum, secondNum) {
    return +firstNum + +secondNum;
}

function subtract(firstNum, secondNum) {
    return +firstNum - +secondNum;
}

function multiply(firstNum, secondNum) {
    return +firstNum * +secondNum;
}

function divide(firstNum, secondNum) {
    if (secondNum == 0) {
        return "Error";
    }
    else {
        return +firstNum / +secondNum;
    }
}

function modulo(firstNum, secondNum) {
    if (secondNum == 0) {
        return "Error";
    }
    else {
        return +firstNum % secondNum;
    }
}

results = document.querySelector(".results");
display = document.querySelector(".display");
buttons = document.querySelectorAll("button");

numericButtons = document.querySelectorAll(".numbers");
operatorButtons = document.querySelectorAll(".operator");
equalsButton = document.querySelector("#equals");
clearButton = document.querySelector("#clear");

numericButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        display.textContent += `${event.target.textContent}`;
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        display.textContent += ` ${event.target.textContent} `;
    });
});

equalsButton.addEventListener("click", (event) => {
    let expression = display.textContent;
    let expressionArray = expression.split(" ");
    switch (expressionArray[1]) {
        case "+":
            expressionCalc = add(expressionArray[0], expressionArray[2]);
            break;
        case "-":
            expressionCalc = subtract(expressionArray[0], expressionArray[2]);
            break;
        case "x":
            expressionCalc = multiply(expressionArray[0], expressionArray[2]);
            break;
        case "/":
            expressionCalc = divide(expressionArray[0], expressionArray[2]);
            break;
        case "%":
            expressionCalc = modulo(expressionArray[0], expressionArray[2]);
            break;
        default:
            break;
    }
    results.textContent = `${expressionCalc}`;
});

clearButton.addEventListener("click", (event) => {
    display.textContent = "";
    results.textContent = "0";
});