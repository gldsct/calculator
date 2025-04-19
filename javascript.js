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

let isCalculated = false;

numericButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (isCalculated === true) {
            display.textContent = "";
            results.textContent = "0";
            isCalculated = false;
        }
        display.textContent += `${event.target.textContent}`;
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (isCalculated === true) {
            display.textContent = "";
            results.textContent = "0";
            isCalculated = false;
        }
        if (display.textContent.split(" ").length >= 3) {
            let clickEvent = new Event("click");
            equalsButton.dispatchEvent(clickEvent);
            display.textContent = results.textContent;
        }
        display.textContent += ` ${event.target.textContent} `;
    });
});

equalsButton.addEventListener("click", (event) => {
    if (display.textContent.split(" ").length == 3) {
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
        if (typeof expressionCalc === "number") {
            results.textContent = `${+expressionCalc.toFixed(3)}`;
        }
        else {
            results.textContent = `${expressionCalc}`;
        }
        if (event.isTrusted) {
            isCalculated = true;
        }
    }
});

clearButton.addEventListener("click", (event) => {
    display.textContent = "";
    results.textContent = "0";
});