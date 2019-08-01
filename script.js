const Add = (num1, num2) => {
    return num1 + num2;
}

const Subtract = (num1, num2) => {
    return num1 - num2;
}

const Multiply = (num1, num2) => {
    return num1 * num2;
}

const Divide = (num1, num2) => {
    return num1 / num2;
}

const Operate = (operator, num1, num2) => {
    if(operator == "+") {
        return add(num1, num2);
    }
    else if(operator == "-") {
        return subtract(num1, num2);
    }
    else if(operator == "*") {
        return multiply(num1, num2);
    }
    else if(operator == "/") {
        return divide(num1, num2);
    }
}

const InitHandlers = () => {
    let buttons = document.getElementsByClassName("calcBtn");
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            alert(buttons[i]);
        })
    }
}

InitHandlers();