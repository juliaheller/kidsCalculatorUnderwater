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
            document.getElementById("bubbleText").innerHTML= "Great,<br> You selected your number(s)! <br> When you have clicked <br> up to 10 numbers, <br> select one of the operator bubbles:<br> (+) (-) (*) or (/).";
        }
        else {
            alert("With this calculator you can only use numbers with 10 digits. Choose an operator now.");
        }
    }
    
    else {
        if (display2.length < 10){
            display2 = display2 + number;
            document.getElementById("display2").innerHTML= display2;
            document.getElementById("bubbleText").innerHTML= "You are almost done!<br> Click on the equals sign: (=)<br> to get your result."
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
        document.getElementById("bubbleText").innerHTML= "Now thet you have decided on an operator,<br>select again the second number(s) <br> that you want to calculate with.";
        }
    }
}
   
/*function calculate(equals){
    resultDisplay = eval(display1 + display2); -->eval ist zwar n sich richtig, kann aber leicht gehackt werden
    document.getElementById("resultDisplay").innerHTML= resultDisplay;
}*/

function calculate(){
    if (display2 == ""){
        alert("You have to choose a second number first.")
    }
    else {
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
    document.getElementById("bubbleText").innerHTML="Congratulations!<br> Now you can see your result!<br>To start again, press the crumpy octopus<br>or select a new number."
    document.getElementById("area8").src='../images/fish1.gif';
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
    document.getElementById("bubbleText").innerHTML="Hello there!<br>To start calculating <br>press one of the bubbles with numbers.<br>";
    document.getElementById("area8").src="../images/fish1.png";
}