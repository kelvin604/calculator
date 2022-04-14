const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a / b;
}

function operate(operator,a,b){
    switch(operator){
        case '+':
            return add(a,b);
        
        case '-':
            return subtract(a,b);
        
        case '*':
            return multiply(a,b);
        
        case '/':
            return divide(a,b);
    }
}

for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', ()=> {
        console.log(buttons[i].textContent);
        display.textContent = display.textContent.concat(buttons[i].textContent);
    });
}

