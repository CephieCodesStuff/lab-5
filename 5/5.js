let operand = 0;
let state = "";

function C() {
    document.getElementById("display").value = 0;
}
function sum(num) {
    display = document.getElementById("display")
    if (display.value == "0") {
        display.value = num;
    } else display.value += num;
}
function state_change(ns) {
    operand = Number(document.getElementById("display").value);
    state = ns;
    C();
}
function calc() {
    display = document.getElementById("display");
    num = Number(display.value);
    switch (state) {
        case '+':
            display.value = operand + num;
            break;
        case '-':
            display.value = operand - num;
            break;
        case '*':
            display.value = operand * num;
            break;
        case '/':
            if (display.value == '0') {
                alert("На 0 делить нельзя.");
            } else {
                display.value = operand / num;
            }
            break;

    }
}