var curNum = 0;
var tempNum = 0;
var answer = 0;
var action = 'A';
function appCN(x) {
  curNum = parseInt(curNum.toString() + x);
  answer = curNum;
  updateAns();
}
function updateAns() {
  document.getElementById("answer").innerHTML = answer;
}

document.getElementById("r2b1").onclick = function() { appCN("1"); };
document.getElementById("r2b2").onclick = function() { appCN("2"); };
