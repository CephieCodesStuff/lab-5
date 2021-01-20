window.onscroll = function() {
    let button = document.getElementById("arrow");
    if (window.pageYOffset > 10 && window.innerWidth >= 1366) {
        button.style.display = "block";
    } else button.style.display = "none";
}
window.onresize = function() {
    let button = document.getElementById("arrow");
    if (window.innerWidth < 1366) {
        button.style.display = "none";
    } else window.onscroll()
}