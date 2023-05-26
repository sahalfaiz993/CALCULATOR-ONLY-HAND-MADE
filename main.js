function display(number) {
    document.getElementById("result").value += number;
}
function calculate() {
    var x =  document.getElementById("result").value;
    var y = eval(x)
    document.getElementById("result").value=y;
}

function clearscreen() {
    document.getElementById("result").value = " "
}

// function clearOneScreen() {
//     var x = + document.getElementById("result").value;
//     x = x.slice(0, -1)
// }