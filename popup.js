var equation = "0";
function appEquat(x) {
  equation = equation + x;
}
function showEquat() {
  document.getElementById("answer").innerHTML = eval(equation);
}
document.getElementById("r1b1").onclick = appEquat("0");
document.getElementById("r1b3").onclick = showEquat();
