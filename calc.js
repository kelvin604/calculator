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
let string;
let operator2;
let secondOperand;
let firstOperand;
let temp;
let isnegative = 0;
let wasnegative = 0;
let bothNum;
let isnegative2 = 0;
let screen = display.textContent;





for(let i=0; i < buttons.length; i++){
    if(buttons[i] == clear){
        buttons[i].addEventListener('click', ()=>{
            display.textContent = '';
            isnegative = 0;
            isnegative2 = 0;
            /*keep this?*/
            operator = undefined;
            operator2 = undefined;
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
                bothNum = expression.split(operator);
                num1 = parseFloat(bothNum[0]);
                num2 = parseFloat(bothNum[1]);
                console.log(bothNum);
                

                /* catches double operators in a row*/
                if(bothNum[1] == '' && bothNum[2] == ''){
                    console.log('both empty');
                    bothNum.pop();
                    display.textContent = bothNum[0] + buttons[i].textContent;
                    
                }
                /*if expression starts with negative*/
                if(bothNum[0] == ''){
                    /*bothNum[0] = array[0].concat(bothNum[1]);*/
                    firstOperand = array.slice(1, display.textContent.indexOf(operator));
                    firstOperand = firstOperand.join('');
                    bothNum[0] = firstOperand;

                    secondOperand = array.slice(display.textContent.indexOf(operator)+1, array.length + 1);
                    secondOperand = secondOperand.join('');
                    bothNum[1] = secondOperand;
                    
                    num1 = 0-firstOperand;
                    num2 = parseFloat(bothNum[1]);
                    
                }

                if(array[array.length -1] == subtractButton.textContent && array[array.length - 2] == multiplyButton.textContent ||
                array[array.length -1] == subtractButton.textContent && array[array.length - 2] == divideButton.textContent){
                    operator2 = array[array.length - 2];
                    if(operator2 == multiplyButton.textContent || operator2 == divideButton.textContent){
                        isnegative = 1;
                    }

                }
                if(array[array.length - 1] == multiplyButton.textContent || array[array.length -1] == divideButton.textContent){
                    operator2 = buttons[i].textContent;
                }
           
                
                if(bothNum[1].includes('-')){
                    num2 = num2 * -1;
                    
                    display.textContent = num1 + operator2 + num2;
                }

                if(array.includes('-') == false){
                    isnegative = 0;
                }
                
                /*bug Here*/
                
                if(isnegative == 1){
                    
                    num2 = num2 * -1;
                    display.textContent = num1 + operator2 + num2;
                    
                }
                
                /*continue*/
                
                /*bug is here*/
                
                if(operator2 == multiplyButton.textContent && operator == subtractButton.textContent && array.length > 2||
                    operator2 == divideButton.textContent && operator == subtractButton.textContent && array.length > 2){

                    console.log('heelellelelelel');
                    
                    
                    isnegative = 1;
                    
                    if(num2 > 0 && bothNum[0] != ''){
                        num2 = num2 * -1;
                    }
                    
                    
                    
                    display.textContent = num1 + operator2 + num2;
                    if(bothNum[0] != '' && bothNum[1] == ''){
                        display.textContent = num1 + operator2;
                    }
                    
                    
                    if(bothNum[0] == 0){;
                        display.textContent = operator + num2*-1;

                    }
                    /*needs fixing*/
                    
                    
                } 
                /*this kinda buggy*/
                
                
                /*if first operand is negative and opertor is multiply or divide and not clicking subtract. Make negative */
                
                if(array[0] == subtractButton.textContent && array[array.indexOf(operator2)] ==  multiplyButton.textContent && buttons[i] != subtractButton || 
                array[0] == subtractButton.textContent && array[array.indexOf(operator2)] ==  divideButton.textContent && buttons[i] != subtractButton){
                    isnegative = 0;
                }
                
                
                
                if(bothNum[0] != '' && bothNum[1] == ''){
                    display.textContent = num1 + operator2;
                }
                
                if(bothNum[0] != '' && bothNum[1] == '' && operator == addButton.textContent||
                bothNum[0] != '' && bothNum[1] == '' && operator == subtractButton.textContent){
                    display.textContent = num1 + operator;
                }


                
                
                
                let count = 0;
                let string2 = bothNum[1].split('');
                console.log(string2);
                
                for(let character of string2){
                    if(character == subtractButton.textContent || character == '-'){
                        count += 1;
                    }
                }
                if(count == 2){
                    operator2 = subtractButton.textContent;
                    isnegative = 0;
                }

                
    
                /*bugging again*/
                
                if(bothNum[1].includes(subtractButton.textContent) == true && bothNum[1] != subtractButton.textContent){
                    operator2 = subtractButton.textContent;
                }
                console.log(count);
                
                console.log(num1);
                console.log(num2);
                console.log(operator2);
                console.log("operator2^")
                console.log(operator);
                console.log("operator^")
                console.log(screen);
                console.log(bothNum[1]);
                console.log(typeof(bothNum[1]));
                console.log(bothNum);
                
                
                /*index of negative
                console.log(array[(array.indexOf(operator2) + 1)]);*/
                
                
                
                
                /* evaluate on second operator */
                if(bothNum.length > 2 || bothNum[1].includes(subtractButton.textContent) && bothNum[1] || bothNum[1].includes(multiplyButton.textContent) ||
                bothNum[1].includes(divideButton.textContent) || bothNum[1].includes(addButton.textContent)){
                    console.log('greater than two');
                    let sum = evaluate(operator,num1,num2);
                    display.textContent = sum + buttons[i].textContent;

                }
                
                
                

                /* display operator after pressing */
                
                if(bothNum[1] == subtractButton.textContent || bothNum[1] == addButton.textContent || bothNum[1] == divideButton.textContent
                    || bothNum[1] == multiplyButton.textContent){
                        display.textContent = num1 + buttons[i].textContent;
                        
                        
                        /*insert negative bug fix here*/
                        
                        
                        
        
                }
       
            } 
        });       
    }
    /* come back to this concept
    if(buttons[i] == multiplyButton || buttons[i] == divideButton){
        buttons[i].addEventListener('click', ()=>{
            if(array[0] == subtractButton.textContent){
                console.log('lmao')
                display.textContent[0] = '-';
               
            }
        });
    }
    */

    if(buttons[i] == equalButton){
        buttons[i].addEventListener('click', ()=>{
            let sum = evaluate(operator,num1,num2);
            if(display.textContent == ''){
                sum = '';
            }
            if(isnegative == 1){
                sum = evaluate(operator2, num1, num2);
            }

            display.textContent = sum;
            console.log(typeof(sum));

            operator2 = subtractButton.textContent;
        });
    }
    
   
    
   
}



