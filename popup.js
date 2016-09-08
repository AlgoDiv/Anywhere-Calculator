var curNum = 0;
var tempNum = 0;
var answer = 0;
var action = 'S';
function appCN(x) {
  curNum = parseInt(curNum.toString() + x);
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
  switch(action) {
    case 'A':
      answer = curNum + tempNum;
      tempNum = answer;
      curNum = 0;
      updateAns();
    case 'S':
      answer = tempNum - curNum;
      tempNum = answer;
      curNum = 0;
      updateAns();
  }
}
function updateAns() {
  document.getElementById("answer").innerHTML = answer;
}

document.getElementById("r1b3").onclick = function() { getAns(); };
document.getElementById("r2b1").onclick = function() { appCN("1"); };
document.getElementById("r2b2").onclick = function() { appCN("2"); };
document.getElementById("r2b4").onclick = function() { getAction('S'); };
