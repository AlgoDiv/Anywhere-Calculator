var curNum = 0;
var tempNum = 0;
var answer = 0;
var action = 'A';
function appCurNum(x) {
  curNum = parseInt(curNum.toString() + x);
  answer = curNum;
  updateAns();
}
function updateAns() {
  document.getElementById("answer").innerHTML = answer;
}

document.getElementById("r2b1").onclick = function() { appX("1"); };
document.getElementById("r2b2").onclick = function() { appX("2"); };
