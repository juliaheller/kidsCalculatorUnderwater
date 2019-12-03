var display1 = "";
var display2 = ""; 
var operator = "";
var resultDisplay = "";

function takeNumber(number){
    if (operator == ""){
        display1 = display1 + number;
        document.getElementById("display1").innerHTML= display1;
    }
    else {
        display2 = display2 + number;
        document.getElementById("display2").innerHTML= display2;
    }
}
    
function takeOperator(op){
    if (operator !== "") {
        operator = op;
        display1 = display1.substring(0, display1.length -1);
        display1 = display1 + operator;
        document.getElementById("display1").innerHTML= display1;
    }
    else {
        operator = op;
        display1 = display1 + operator;
        document.getElementById("display1").innerHTML= display1;
    }
}
   
/*function calculate(equals){
    resultDisplay = eval(display1 + display2); -->eval ist zwar n sich richtig, kann aber leicht gehackt werden
    document.getElementById("resultDisplay").innerHTML= resultDisplay;
}*/

function calculate(){
    var number1 = display1.substring(0, display1.length -1); //Display1 wird um den Operator gekuerzt und in number 1 umgewandelt
    number1 =  parseInt(number1); // Der String von number 1 wird in eine Zahl umgewandelt
    var number2 = parseInt(display2);
    switch (operator){
        case "+":
            document.getElementById("resultDisplay").innerHTML= number1 + number2;
            resultDisplay = number1 + number2;
            break;
        case "-":
            document.getElementById("resultDisplay").innerHTML= number1 - number2;
            resultDisplay = number1 - number2;
            break;
        case "*":
            document.getElementById("resultDisplay").innerHTML= number1 * number2;
            resultDisplay = number1 * number2;
            break;
        case "/":
            document.getElementById("resultDisplay").innerHTML= number1 / number2;
            resultDisplay = number1 / number2;    
    }
        

}

function clearDisplays(){
    document.getElementById("display1").innerHTML= "";
    document.getElementById("display2").innerHTML= ""; 
    operator = "";
    document.getElementById("resultDisplay").innerHTML= "";
}