const total = document.getElementById('answer');
const numberInputField = document.getElementById('numberInput');
var answer = +0;
var previousOperation;

//global functions
//function doKeyAction(e) {
//    Switch(e, document.getElementById('numberInput').value);
//    console.log("Which: " + e.which + " KeyCode: " + e.keyCode);
//    FocusCursor();
//}

$(document).ready(function () {
    numberInputField.readOnly = true;
});

$(document).keypress(function (e) {
    console.log("Which: " + e.which + " KeyCode: " + e.keyCode + " Code: " + e.key);
    Switch(e, document.getElementById('numberInput').value);
    FocusCursor();
});

function UpdateInputField(key) {
    numberInputField.value += key;
}

function InsertDecimal(key) {
    var decimalInput = '/^[-+]?[0-9]+\.[0-9]+$/';
    //if (numberInputField.indexOf('.') > -1) {
    if (numberInputField.value.match(decimalInput)) {
        //do nothing
    }
    else {
        //do nothing
        numberInputField.value += key;
    }
}

//KeyboardEvent.code list of values https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
//Keyboard code list of keys https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
function Switch(e, numberInput) {
    //var event = e.which || e.keyCode;
    var key = e.key;
    switch (key) {
        case '1':
            UpdateInputField(key);
            console.log(key);
            //do 1
            break;
        case '2':
            UpdateInputField(key);
            console.log(key);
            //do 1
            break;
        case '3':
            UpdateInputField(key);
            console.log(key);
            //do 1
            break;
        case '4':
            UpdateInputField(key);
            console.log(key);
            //do 1
            break;
        case '5':
            UpdateInputField(key);
            console.log(key);
            //do 1
            break;
        case '6':
            UpdateInputField(key);
            console.log(key);
            //do 1
            break;
        case '7':
            UpdateInputField(key);
            console.log(key);
            //do 1
            break;
        case '8':
            UpdateInputField(key);
            console.log(key);
            //do 1
            break;
        case '9':
            UpdateInputField(key);
            console.log(key);
            //do 1
            break;
        case '0':
            UpdateInputField(key);
            console.log(key);
            //do 1
            break;
        case '.':
            InsertDecimal(key);
            console.log(key);
            //do 1
            break;
        case "Enter":
            console.log(event);
            Equals(numberInput);
            //do enter/equals
            break;
        case '*':
            console.log(event);
            previousOperation = "*";
            Multiply(e, numberInput);
            break;
        case '+':
            console.log(event);
            previousOperation = "Add";
            Add(e, numberInput);
            break;
        case '-':
            console.log(event);
            previousOperation = "Subtract";
            Subtract(e, numberInput);
            break;
        case '/':
            console.log(event);
            previousOperation = "Divide";
            Divide(e, numberInput);
            break;
        case 'Enter':
            console.log(event);
            Equals(numberInput);
            //do enter/equals
            break;
    }
    //If ESCAPE is pressed, clear the entry
    //TODO: Mikal, this isn't working with my keyboard...investigate it.
    if (e.code === 27) {
        FocusCursorAndClearInput();
    }
    /*switch (event) {
        case 106:
            console.log(event);
            previousOperation = "Multiply";
            Multiply(e, numberInput);
            break;
        case 170:
            console.log(event);
            previousOperation = "Multiply";
            Multiply(e, numberInput);
            break;
        case 107:
            console.log(event);
            previousOperation = "Add";
            Add(e, numberInput);
            break;
        case 171:
            console.log(event);
            previousOperation = "Add";
            Add(e, numberInput);
            break;
        case 109:
            console.log(event);
            previousOperation = "Subtract";
            Subtract(e, numberInput);
            break;
        case 189:
            console.log(event);
            previousOperation = "Subtract";
            Subtract(e, numberInput);
            break;
        case 111:
            console.log(event);
            previousOperation = "Divide";
            Divide(e, numberInput);
            break;
        case 191:
            console.log(event);
            previousOperation = "Divide";
            Divide(e, numberInput);
            break;
        case 105:
            numberInputField.toggleAttribute("readonly");
            numberInputField.value += 9;
            console.log(event);
            //do 9
            break;
        case 57:
            numberInputField.toggleAttribute("readonly");
            numberInputField.value += 9;
            console.log(event);
            //do 9
            break;
        case 104:
            numberInputField.value += 8;
            console.log(event);
            //do 8
            break;
        case 56:
            numberInputField.value += 8;
            console.log(event);
            //do 8
            break;
        case 55:
            numberInputField.value += 7;
            console.log(event);
            //do 7
            break;
        case 103:
            numberInputField.value += 7;
            console.log(event);
            //do 7
            break;
        case 102:
            numberInputField.value += 6;
            console.log(event);
            //do 6
            break;
        case 54:
            numberInputField.value += 6;
            console.log(event);
            //do 6
            break;
        case 101:
            numberInputField.value += 5;
            console.log(event);
            //do 5
            break;
        case 53:
            numberInputField.value += 5;
            console.log(event);
            //do 5
            break;
        case 100:
            numberInputField.value += 4;
            console.log(event);
            //do 4
            break;
        case 52:
            numberInputField.value += 4;
            console.log(event);
            //do 4
            break;
        case 99:
            numberInputField.value += 3;
            console.log(event);
            //do 3
            break;
        case 51:
            numberInputField.value += 3;
            console.log(event);
            //do 3
            break;
        case 98:
            numberInputField.value += 2;
            console.log(event);
            //do 2
            break;
        case 50:
            numberInputField.value += 2;
            console.log(event);
            //do 2
            break;
        case 97:
            numberInputField.value += 1;
            console.log(event);
            //do 1
            break;
        case 49:
            numberInputField.value += 1;
            console.log(event);
            //do 1
            break;
        case 96:
            numberInputField.value += 0;
            console.log(event);
            //do 0
            break;
        case 48:
            numberInputField.value += 0;
            console.log(event);
            //do 0
            break;
        case 110:
            console.log(event);
            //do .
            break;
        case 190:
            numberInputField.value += '.';
            console.log(event);
            //do .
            break;
        case 46:
            numberInputField.value += '.';
            console.log(event);
            //do .
            break;
        case 187:
            numberInputField.value += '.';
            console.log(event);
            //do .
            break;
        case 222:
            numberInputField.value += '.';
            console.log(event);
            //do .
            break;
        case 192:
            numberInputField.value += '.';
            console.log(event);
            //do .
            break;
        case 13:
            console.log(event);
            Equals(numberInput);
            //do enter/equals
            break;
    }*/
}

//add function
function Add(numberInput) {
    total.value += +numberInput + " + ";
    answer = +answer + +numberInput;
    UpdateAnswer(answer);
    previousOperation = "Add";
    FocusCursorAndClearInput();
}

//subtract function
function Subtract(numberInput) {
    total.value += numberInput + " - ";
    answer = +answer - +numberInput;
    UpdateAnswer(answer);
    previousOperation = "Subtract";
    FocusCursorAndClearInput();
}

//multiply function
function Multiply(numberInput) {
    total.value += numberInput + " * ";
    answer = +answer * +numberInput;
    UpdateAnswer(answer);
    previousOperation = "Multiply";
    FocusCursorAndClearInput();
}

//divide function
function Divide(numberInput) {
    total.value += numberInput + " / ";
    answer = +answer / +numberInput;
    UpdateAnswer(answer);
    previousOperation = "Divide";
    FocusCursorAndClearInput();
}

//total up the answer and display the final result
function Equals(numberInput) {
    //perform the final operation before updating the answer
    switch (previousOperation) {
        case "Add":
            total.value += +numberInput;
            answer = +answer + +numberInput;
            break;
        case "Subtract":
            total.value += +numberInput;
            answer = +answer - +numberInput;
            break;
        case "Multiply":
            total.value += numberInput;
            answer = +answer * +numberInput;
            break;
        case "Divide":
            total.value += numberInput;
            answer = +answer / +numberInput;
            break;

    }

    //UpdateAnswer(answer); 
    total.value += " = " + answer;
    FocusCursorAndClearInput();
    numberInputField.value = answer;
}

//update the running total so when the Equals function is called, it has the last value entered included in the calculation
function UpdateAnswer(a) {
    answer = a;
}

//clear/reset function
function ClearInput() {
    $('#numberInput').val('');
    //var input = document.getElementById('numberInput');
    //input.value = '';
    ////document.getElementById('calculatorForm').reset();
}

//put the cursor in the input text box
function FocusCursor() {
    //$('#numberInput').focus();
}

//put the cursor in the input text box when the page loads
$(function () {
    FocusCursor();
});

function FocusCursorAndClearInput() {
    ClearInput();
    FocusCursor();
}

//$(document).keyup(function (e) {
//    var event = e.which || e.keyCode;
//    switch (event) {
//        case 106:
//            FocusCursorAndClearInput();
//            break;
//        case 107:
//            FocusCursorAndClearInput();
//            break;
//        case 109:
//            FocusCursorAndClearInput();
//            break;
//        case 111:
//            FocusCursorAndClearInput();
//            break;
//    }
//});