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
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(operator == "+") {
        return Add(num1, num2);
    }
    else if(operator == "-") {
        return Subtract(num1, num2);
    }
    else if(operator == "x") {
        return Multiply(num1, num2);
    }
    else if(operator == "/") {
        if(num2 == 0)
            return "Hull breach: divide by 0";
        return Divide(num1, num2);
    }
}

const ClearDisplay = () => {
    expression = "";
    document.getElementById("display").innerText = "0";
}

const CalculateParsed = (operatorArr, operandArr) => {
    let result;
    let j = 0;
    for(let i = 0; i < operandArr.length; i+=2) {
        let tempResult = operate(operatorArr[j], operandArr[i], operandArr[i+1]);
        j++;
    }
}

const ParseExpression = () => {
    let operandsArr = expression.split(/[\+\-x\/]/g);
    let operatorsArr = expression.split(/[\d^.]/).filter(e => e != "");
    console.log('operandsArr: ' + operandsArr);
    console.log('operatorsArr: ' + operatorsArr);
    let result = 0;
    while(operatorsArr.length > 0) {
        for(let i = 0; i < operatorsArr.length; i++) {
            if(operatorsArr[i] == 'x' || operatorsArr[i] == '/') {
                result = Operate(operatorsArr[i], operandsArr[i], operandsArr[i+1]);
                operatorsArr.splice(i, 1);
                operandsArr.splice(i, 2);
                operandsArr.splice(i, 0, result);
            }
        }
        
        for(let i = 0; i < operatorsArr.length; i++) {
            if(operatorsArr[i] == '+' || operatorsArr[i] == '-') {
                console.log('operandsArr: ' + operandsArr);
                console.log('operatorsArr: ' + operatorsArr);
                result = Operate(operatorsArr[i], operandsArr[i], operandsArr[i+1]);
                operatorsArr.splice(i, 1);
                operandsArr.splice(i, 2);
                operandsArr.splice(i, 0, result);
                console.log('operandsArr: ' + operandsArr);
                console.log('operatorsArr: ' + operatorsArr);
            }
        }
    }
    return result;
}

// Initializes button with click event handlers
const InitHandlers = () => {
    let buttons = document.getElementsByClassName("calcBtn");
    let display = document.getElementById("display");
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            let btnVal = buttons[i].innerText;
            if(btnVal == "C")
                ClearDisplay();
            else if(btnVal == "=") {
                expression = ParseExpression();
                display.innerText = expression;
            }
            else {
                expression += btnVal;
                display.innerText = expression;
            }
        });
    }
};

const KeyHandlers = () => {
    document.addEventListener('keydown', (e) => {
        if(e.key == 'C' || e.key == 'c') {
            ClearDisplay();
        } 
        else if(e.key == '=' || e.key == 'Enter') {
            expression = ParseExpression();
            display.innerText = expression;
        }
        else if(e.key == '*') {
            expression += 'x';
            display.innerText = expression;
        }
        else if(!isNaN(e.key) ||
                e.key == '/' ||
                e.key == '+' ||
                e.key == '-' ||
                e.key == '.') {
            expression += e.key;
            display.innerText = expression;
        }
    });
};

// MAIN
InitHandlers();
KeyHandlers();