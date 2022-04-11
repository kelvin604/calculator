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

const numbers = document.querySelector('.one-nine');

for(let i=1; i < 10; i++){
    let div = document.createElement('div');
    div.textContent = `${i}`;
    numbers.appendChild(div);

}