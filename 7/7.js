"use strict";

const win_states = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];

let game_end = false;
const fields = document.getElementById("ttt").getElementsByTagName('td');

for (let i = 0; i<9; i++) {
    fields[i].addEventListener("click", click(i));
}

function get(n) {
    return fields[n].innerHTML;
}

function check() {
    for (let s of win_states) {
        let c = get(s[0]);
        if (c && c == get(s[1]) && c == get(s[2])) {
            return true;
        }
    }
    return false;
}

function free_fields() {
    let res = [];
    for (let field of fields) {
        if (field.innerHTML == "") res.push(field);
    }
    return res;
}

function ai_turn(fc) {
    let pc_cell = Math.floor(Math.random()*fc.length);
    fc[pc_cell].innerHTML = "X";
}

function click(n) {
    function move() {
        console.log('test');
        if (game_end) clear();

        if (get(n) == "") fields[n].innerHTML = "O";
        else return;

        let fc = free_fields();

        if (check()) {
            game_end = true;
            alert("Победили нолики!");
            return;
        } else if (fc.length) {
            ai_turn(fc);
            if (check()) {
                game_end = true;
                alert("Победили крестики!");
            }
        } else {
            game_end = true;
            alert("Ничья!");
        }
    }
    return move;
}

function _clear() {
    game_end = false;
    for (let field of fields) {
        field.innerHTML = "";
    }
}