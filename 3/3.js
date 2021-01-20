function copy() {
    let field1 = document.getElementById("field1");
    let field2 = document.getElementById("field2");
    if (field1.value) {
        field2.value = field1.value;
    } else {
        alert("1-е поле пусто")
    }
}
function purge() {
    document.getElementById("field1").value = "";
    document.getElementById("field2").value = "";
}