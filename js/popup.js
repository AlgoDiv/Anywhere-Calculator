var equation = "";
function appEquat(x) {
  equation = equation + x;
}
function showEquat() {
  document.getElementById("answer").innerHTML = eval(equation)
}
