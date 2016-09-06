var equation = "0";
function appEquat(x) {
  equation = equation + x;
}
function showEquat() {
  document.getElementById("answer").innerHTML = eval(equation);
}

document.getElementById("r2b1").onclick = function() { appEquat("1"); };
document.getElementById("r1b3").onclick = showEquat;
