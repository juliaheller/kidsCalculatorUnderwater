var display1 = "";
var display2 = ""; 
var operator = "";
var resultDisplay = "";


function takeNumber(number){
    if (resultDisplay !== ""){   // Wenn es kein Ergebnis gibt, dann sind auch alle anderen Displays leer, sobald eine Zahl geklickt wird..
       clearDisplays();   
    }

    if (operator == ""){
        if (display1.length < 10){
            display1 = display1 + number;
            document.getElementById("display1").innerHTML= display1;
        }
        else {
            alert("With this calculator you can only use numbers with 10 digits. Choose an operator now.");
        }
    }
    
    else {
        if (display2.length < 10){
            display2 = display2 + number;
            document.getElementById("display2").innerHTML= display2;
        }
        else {
            alert("With this calculator you can only use numbers with 10 digits. Click the equals bubble now.");
        }
        
    }
}
    
function takeOperator(op){
    if (operator !== "" && display1 !== "") { /* Es ist noch kein Operator gewaehlt und im Display1 steht noch nichts.*/
        operator = op;
        display1 = display1.substring(0, display1.length -1);
        display1 = display1 + operator;
        document.getElementById("display1").innerHTML= display1;
    }
    else {
        if(display1!== ""){
        operator = op;
        display1 = display1 + operator;
        document.getElementById("display1").innerHTML= display1;
        }
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
            resultDisplay = number1 + number2;
            document.getElementById("resultDisplay").innerHTML= resultDisplay; 
            break;
        case "-":
            resultDisplay = number1 - number2;
            document.getElementById("resultDisplay").innerHTML= resultDisplay; 
           
            break;
        case "*":
            resultDisplay = number1 * number2;    
            document.getElementById("resultDisplay").innerHTML= resultDisplay; 
            
            break;
        case "/":
            resultDisplay = number1 / number2; 
            document.getElementById("resultDisplay").innerHTML= resultDisplay; 
               
    }
}

function clearDisplays(){ //Clear Button loescht alle Displays
    display1 = "";
    display2 = ""; 
    operator = "";
    resultDisplay = "";
    document.getElementById("display1").innerHTML= "";
    document.getElementById("display2").innerHTML= ""; 
    document.getElementById("resultDisplay").innerHTML= "";
}