var display1 = "";
var display2 = ""; 
var operator = "";
var resultDisplay = "";

function takeNumber(number){
    display1 = display1 + number;
    document.getElementById("display1").innerHTML= display1;
}
    
function takeOperator(op){
    if (operator !== "") {
        operator = op;
        display1 = display1.substring(0, display1.length -1);
        debugger
        display1 = display1 + operator;
        document.getElementById("display1").innerHTML= display1;
    }
    else {
        operator = op;
        display1 = display1 + operator;
        document.getElementById("display1").innerHTML= display1;
    }
}
   
