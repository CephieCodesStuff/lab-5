function c_table() {
    let col = Number(document.getElementById("col").value);
    let row = Number(document.getElementById("row").value);
    let old = document.getElementById("tab");
    if (old){
        old.remove();
    }
    let table = document.createElement("table");
    table.id = "tab";
    for (let i = 0; i < col; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < row; j++) {
            let td = document.createElement("td");
            let data = document.createTextNode(Math.round(Math.random()*9+1).toString());
            td.appendChild(data);
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}