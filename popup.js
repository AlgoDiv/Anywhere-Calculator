var curNum = 0;
var tempNum = 0;
var answer = 0;
var action = 'Z';
function appCN(x) {
  curNum = parseFloat(curNum.toString() + x);
  answer = curNum;
  updateAns();
}
function getAction(x) {
  action = x;
  if(curNum != 0) {
    tempNum = curNum
  }
  curNum = 0;
  answer = curNum;
  updateAns();
}
function getAns() {
  if(action == 'A') {
    answer = tempNum + curNum;
    tempNum = answer;
    curNum = 0;
    updateAns();
  } else if(action == 'S') {
    answer = tempNum - curNum;
    tempNum = answer;
    curNum = 0;
    updateAns();
  } else if(action == 'M') {
    answer = tempNum * curNum;
    tempNum = answer;
    curNum = 0;
    updateAns();
  } else if(action == 'D') {
    answer = tempNum / curNum;
    tempNum = answer;
    curNum = 0;
    updateAns();
  } else {  }
}
function clear() {
  curNum = 0;
  tempNum = 0;
  answer = 0;
  action = 'Z';
  updateAns();
}
function updateAns() {
  if(answer.length >= 4) {
    document.getElementById("answer").innerHTML = answer.substr(answer.length - 6);
  } else {
    document.getElementById("answer").innerHTML = answer;
  }
}

document.getElementById("r1b1").onclick = function() { appCN("0"); };
document.getElementById("r1b2").onclick = function() { clear(); };
document.getElementById("r1b3").onclick = function() { getAns(); };
document.getElementById("r1b4").onclick = function() { getAction('A'); };

document.getElementById("r2b1").onclick = function() { appCN("1"); };
document.getElementById("r2b2").onclick = function() { appCN("2"); };
document.getElementById("r2b3").onclick = function() { appCN("3"); };
document.getElementById("r2b4").onclick = function() { getAction('S'); };

document.getElementById("r3b1").onclick = function() { appCN("4"); };
document.getElementById("r3b2").onclick = function() { appCN("5"); };
document.getElementById("r3b3").onclick = function() { appCN("6"); };
document.getElementById("r3b4").onclick = function() { getAction('M'); };

document.getElementById("r4b1").onclick = function() { appCN("7"); };
document.getElementById("r4b2").onclick = function() { appCN("8"); };
document.getElementById("r4b3").onclick = function() { appCN("9"); };
document.getElementById("r4b4").onclick = function() { getAction('D'); };

