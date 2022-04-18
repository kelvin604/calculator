const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const clear = document.querySelector('.clear');
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const equalButton = document.querySelector('.equal');

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

function evaluate(operator,a,b){
    switch(operator){
        case addButton.textContent:
            return add(a,b);
        
        case subtractButton.textContent:
            return subtract(a,b);
        
        case multiplyButton.textContent:
            return multiply(a,b);
        
        case divideButton.textContent:
            return divide(a,b);
    }
}
let num1 = 0;
let num2 = 0;
let operator;
let array = [];
let operandCounter = 0;


for(let i=0; i < buttons.length; i++){
    if(buttons[i] == clear){
        buttons[i].addEventListener('click', ()=>{
            display.textContent = '';
        });
        continue;
    }
    
    if(buttons[i] != equalButton){
        
        buttons[i].addEventListener('click', ()=> {
            display.textContent = display.textContent.concat(buttons[i].textContent);
            let expression = display.textContent;
            /*get operator*/
            array = expression.split('');
            console.log(array);
            operator = array.filter(string => string == addButton.textContent || string == subtractButton.textContent || string == divideButton.textContent
            || string == multiplyButton.textContent);
            operator = operator[0];


            if(expression.includes(operator) == true){
                let bothNum = expression.split(operator);
                console.log(bothNum);
                num1 = parseInt(bothNum[0]);
                num2 = parseInt(bothNum[1]);

                /* catches double operators in a row*/
                if(bothNum[1] == '' && bothNum[2] == ''){
                    console.log('both empty');
                    bothNum.pop();
                    display.textContent = bothNum[0] + buttons[i].textContent;
                }
                
                /* evaluate on second operator */
                if(bothNum.length > 2 || bothNum[1].includes(subtractButton.textContent) && bothNum[1] || bothNum[1].includes(multiplyButton.textContent) ||
                bothNum[1].includes(divideButton.textContent) || bothNum[1].includes(addButton.textContent)){
                    console.log('greater than two');
                    let sum = evaluate(operator,num1,num2);
                    if(sum==NaN){
                        display.textContent = num1 + operator;
                    }
                    display.textContent = sum + buttons[i].textContent;
                }

                /* display operator after pressing */
                if(bothNum[1] == subtractButton.textContent || bothNum[1] == addButton.textContent || bothNum[1] == divideButton.textContent
                    || bothNum[1] == multiplyButton.textContent){
                        console.log('hello');
                        display.textContent = num1 + buttons[i].textContent;
                        
                    }
                
                
            }
            
                
        
            
        });
        
    }

    if(buttons[i] == equalButton){
        buttons[i].addEventListener('click', ()=>{
            let sum = evaluate(operator,num1,num2);
            if(Number.isInteger(sum) == false){
                return
            }
            if(display.textContent == ''){
                sum = '';
            }
            display.textContent = sum;
            
            
            
            
        });
    }
}



