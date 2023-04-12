function add(a,b){
    let num = (a * 10 + b * 10) / 10;
    return Math.round((num + Number.EPSILON) * 100) / 100

}

function subtract(a,b){
    let num = (a * 10 - b * 10) / 10;
    return Math.round((num + Number.EPSILON) * 100) / 100
}

function multiply(a,b){
    let num = a * b;
    return Math.round((num + Number.EPSILON) * 100) / 100
}

function divide(a,b){
    let num = a / b;
    return Math.round((num + Number.EPSILON) * 100) / 100
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
            if(operation[2] === 0){
                return screen.textContent = "Very Funny!";
            }
            return divide(operation[0],operation[2]);
    }

}

function getOperand(){
    if (operation.length === 1) {
        operation = [];
        screen.textContent = "";
    };
    if(this.textContent === "." && number.includes(".")){
        return
    }
    number += this.textContent;
    screen.textContent += this.textContent;
}

function getOperator(){

    if (operation.length === 1){
        operation.push(this.textContent);
        screen.textContent += " " + this.textContent + " ";
        return;
    }

    if (!number) return

    operation.push(Number(number));
    number = "";

    if(operation.length === 3){
        let n = operate(operation);
        operation = [];
        operation.push(n);
        operation.push(this.textContent);
        screen.textContent = n + " " + this.textContent + " ";
        return;
    }

    operation.push(this.textContent);
    screen.textContent += " " + this.textContent + " ";
}

function getEqualSign(){
    if (!number){
        return
    }
    else if (operation.length === 2){
        operation.push(Number(number));
        number = "";
        let n = operate(operation);
        operation = [];
        operation.push(n);
        screen.textContent = n;
        return console.log(operation)
    }

}

let number = "";
let operation = [];


const operands = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector("#equal");
const screen = document.querySelector("#screen");
const clear = document.querySelector("#clear");

for(operand of operands){
    opd = operand.addEventListener("click", getOperand);
}

for(operator of operators){
    opt = operator.addEventListener("click", getOperator)
}

eqs = equalSign.addEventListener("click",getEqualSign)

cl = clear.addEventListener("click",function(){
    screen.textContent = "";
    operation = [];
    number = "";
});

