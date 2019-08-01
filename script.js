let expression = "";

// Adds 2 number inputs
const Add = (num1, num2) => {
    return num1 + num2;
}

// Subtracts 2 number inputs
const Subtract = (num1, num2) => {
    return num1 - num2;
}

// Multiplies 2 number inputs
const Multiply = (num1, num2) => {
    return num1 * num2;
}

// Divides 2 number inputs
const Divide = (num1, num2) => {
    return num1 / num2;
}

// Takes in an operator and 2 numbers and performs the appropriate operation
const Operate = (operator, num1, num2) => {
    if(operator == "+") {
        return add(num1, num2);
    }
    else if(operator == "-") {
        return subtract(num1, num2);
    }
    else if(operator == "x") {
        return multiply(num1, num2);
    }
    else if(operator == "/") {
        return divide(num1, num2);
    }
}

const ClearDisplay = () => {
    expression = "";
    document.getElementById("display").innerText = "0";
}

// Initializes button with click event handlers
const InitHandlers = () => {
    let buttons = document.getElementsByClassName("calcBtn");
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            let btnVal = buttons[i].innerText;
            if(btnVal == "C")
                ClearDisplay();
            else {
                expression += btnVal;
                let display = document.getElementById("display");
                display.innerText = expression;
            }
        });
    }
}

// MAIN
InitHandlers();