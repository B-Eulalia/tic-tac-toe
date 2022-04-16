let number = 1;
let matrixX = [];
let matrix0 = [];
let matrixCheck =[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
function addItem(p) {
  if(number % 2 != 0) {
    document.getElementById(p).innerHTML ='x';
    matrixX.push(p);
    document.getElementById(p).onclick = "";
  } 
  if(number % 2 == 0) {
    document.getElementById(p).innerHTML = '0';
    matrix0.push(p);
    document.getElementById(p).onclick = "";
  }  
  ++number;
  matrix0.sort();
  matrixX.sort();
  checkBoxes(matrix0,matrixX,matrixCheck);
}
  let player0 = 0;
  let playerX = 0;
function  checkBoxes(matrix0, matrixX, matrixCheck) {
  for(let i = 0; i < matrixCheck.length; ++i) {
    let row  = matrixCheck[i];
    player0  = 0;
    playerX = 0;
    let winner = 'equality';
    for(let j = 0; j < row.length; ++j) {
      for(let z = 0; z < matrix0.length; ++z) {
        if(matrix0[z] == row[j]) {
          ++player0;
        }
        else if (matrixX[z] == row[j]) {
          ++playerX;
        }
      }
      if(playerX == 3) {
        winner = "x";
      }
      if(player0 == 3) {
        winner  = "0";
      }
    }
    winningPlayer(winner);
  }
}
let check_equal = 0;
function  winningPlayer(w) {
  if(w === "equality") {
    ++check_equal;
  } else {
    document.getElementById("msg").innerHTML = "Winner:" + w;
    document.getElementById("table").innerHTML = '';
  }
  if(check_equal === 72) {
    document.getElementById("msg").innerHTML = "Remise";
    document.getElementById("table").innerHTML = '';
  }
}
