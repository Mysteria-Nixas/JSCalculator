const total = document.getElementById('answer');
const numberInputField = document.getElementById('numberInput');
var answer = 0;

//global functions
function doKeyAction(e) {
    //var event = e.which || e.keyCode;
    //if (event === 13) {
    //    //do calculation
    //    alert('Enter was pressed');
    //}
    Switch(e, document.getElementById('numberInput').value);
    console.log("Which: " + e.which + " KeyCode: " + e.keyCode);
}

$(document).keydown(function (e) {
    console.log("Which: " + e.which + " KeyCode: " + e.keyCode);

    Switch(e, document.getElementById('numberInput').value);
     //if (e.keyCode === 13)
     //    $("body").append("<p>Enter pressed without focus</p>");
});

function Switch(e, numberInput) {
    var event = e.which || e.keyCode;
    switch (event) {
        case 106:
            console.log(event);
            Multiply(numberInput);
            break;
        case 107:
            console.log(event);
            Add(numberInput);
            break;
        case 109:
            console.log(event);
            Subtract(numberInput);
            break;
        case 110:
            console.log(event);
            //do .
            break;
        case 111:
            console.log(event);
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
            break;
    }
}

//add function
function Add(numberInput) {
    total.value += numberInput + " + ";
    FocusCursor();
    answer = answer + numberInput;
}

//subtract function
function Subtract(numberInput) {
    total.innerHTML += numberInput + " - ";
    FocusCursor();
    answer = answer - numberInput;
}

//multiply function
function Multiply(numberInput) {
    total.innerHTML += numberInput + " * ";
    FocusCursor();
    answer = answer * numberInput;
}

//divide function
function Divide(numberInput) {
    total.innerHTML += numberInput + " / ";
    FocusCursor();
    answer = answer / numberInput;
}

//total up the answer and display the final result
function Equals() {
    //do equals stuff here
    total.innerHTML += " = " + answer;
    FocusCursor();
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