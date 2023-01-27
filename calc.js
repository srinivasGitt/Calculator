let result;

//take operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

//take operand input
const number1 = parseFloat(prompt('Enter the first number: '));
const number2 = parseFloat(prompt('Enter the second number: '));

switch(operator){
        case '+':
           result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
           break;
        
        case '-':
            result = number1 - number2;
            console.log(`${number1} - ${number2} = ${result}`);
            break; 
        
        case '*':
            result = number1 * number2;
            console.log(`${number1} * ${number2} = ${result}`);
            break;
        
        
        case '/':
            result = number1 / number2;
            console.log(`${number1} / ${number2} = ${result}`);
            break;   
            
        default:
            console.log('invalid operator');  
            break;  
}

/*console.log(result);
 while(true){
    let next = 1;
let cont = prompt('type 1 to continue calculation: ');
let endResult;

if(cont == next){
  const operator2 = prompt( result + 'enter the operand(+, -, * or / ): ');

   let nextNum = parseFloat(prompt('enter the number'))

   switch(operator2){
    case '+':
    endResult = result + nextNum;
    console.log(`${result} + ${nextNum} = ${endResult}`);
       break;
    
    case '-':
        endResult = result - nextNum;
        console.log(`${result} - ${nextNum} = ${endResult}`);
        break; 
    
    case '*':
        endResult = result * nextNum;
        console.log(`${result} * ${nextNum} = ${endResult}`);
        break;
    
    
    case '/':
        endResult = result / nextNum;
        console.log(`${result} / ${nextNum} = ${endResult}`);
        break;   
        
    default:
        console.log('invalid operator');  
        break;

   }
}

 
}*/
