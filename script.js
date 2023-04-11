function add(a,b){
    return (a * 10 + b * 10) / 10;
}

function subtract(a,b){
    return (a * 10 - b * 10) / 10;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(operation){
    switch (operation[1]){
        case "+":
            return add(operation[0],operation[2]);
        case "-":
            return subtract(operation[0],operation[2]);
        case "*":
            return multiply(operation[0],operation[2]);
        case "/":
            return divide(operation[0],operation[2]);
    }
        

}

let operation = [];

