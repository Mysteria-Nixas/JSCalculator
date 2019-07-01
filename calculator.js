const total = document.getElementById('answer');
const numberInputField = document.getElementById('numberInput');
var answer = 0;
var previousOperation = "";

//global functions
function doKeyAction(e) {
    Switch(e, document.getElementById('numberInput').value);
    console.log("Which: " + e.which + " KeyCode: " + e.keyCode);
    FocusCursor();
}

$(document).keydown(function (e) {
    console.log("Which: " + e.which + " KeyCode: " + e.keyCode);
    Switch(e, document.getElementById('numberInput').value);
    FocusCursor();
});

function Switch(e, numberInput) {
    var event = e.which || e.keyCode;
    switch (event) {
        case 106:
            console.log(event);
            previousOperation = "Multiply";
            Multiply(numberInput);
            break;
        case 107:
            console.log(event);
            previousOperation = "Add";
            Add(numberInput);
            break;
        case 109:
            console.log(event);
            previousOperation = "Subtract";
            Subtract(numberInput);
            break;
        case 110:
            console.log(event);
            //do .
            break;
        case 111:
            console.log(event);
            previousOperation = "Divide";
            Divide(numberInput);
            break;
        case 105:
            console.log(event);
            //do 9
            break;
        case 104:
            console.log(event);
            //do 8
            break;
        case 103:
            console.log(event);
            //do 7
            break;
        case 102:
            console.log(event);
            //do 6
            break;
        case 101:
            console.log(event);
            //do 5
            break;
        case 100:
            console.log(event);
            //do 4
            break;
        case 99:
            console.log(event);
            //do 3
            break;
        case 98:
            console.log(event);
            //do 2
            break;
        case 97:
            console.log(event);
            //do 1
            break;
        case 96:
            console.log(event);
            //do 0
            break;
        case 13:
            console.log(event);
            //do enter/equals
            Equals(numberInput);
            break;
    }
}

//add function
function Add(numberInput) {
    total.value += +numberInput + " + ";
    FocusCursor();
    answer = +answer + +numberInput;
    UpdateAnswer(answer);
    //previousOperation = "Add";
}

//subtract function
function Subtract(numberInput) {
    total.value += numberInput + " - ";
    FocusCursor();
    answer = +answer - +numberInput;
    UpdateAnswer(answer);
    //previousOperation = "Subtract";
}

//multiply function
function Multiply(numberInput) {
    total.value += numberInput + " * ";
    FocusCursor();
    answer = +answer * +numberInput;
    UpdateAnswer(answer);
    //previousOperation = "Multiply";
}

//divide function
function Divide(numberInput) {
    total.value += numberInput + " / ";
    FocusCursor();
    answer = +answer / +numberInput;
    UpdateAnswer(answer);
    //previousOperation = "Divide";
}

//total up the answer and display the final result
function Equals(numberInput) {
    //perform the final operation before updating the answer
    switch (previousOperation) {
        case "Add":
            Add(numberInput);
            break;
        case "Subtract":
            Subtract(numberInput);
            break;
        case "Multiply":
            Multiply(numberInput);
            break;
        case "Divide":
            Divide(numberInput);
            break;

    }

    //UpdateAnswer(answer); 
    total.value += " = " + answer;
    ClearInput();
    FocusCursor();    
}

//update the running total so when the Equals function is called, it has the last value entered included in the calculation
function UpdateAnswer(a) {
    answer = a;
}

//clear/reset function
function ClearInput() {
    $('#numberInput').val('');
}

//put the cursor in the input text box
function FocusCursor() {
    $('#numberInput').focus();
    ClearInput();
}

//put the cursor in the input text box when the page loads
$(function () {
    FocusCursor();
});