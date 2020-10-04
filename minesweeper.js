document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
 cells : [
   {row:0, col:0, isMine:false, isMarked: false, hidden:true, surroundingMines:0}, 
   {row:0, col:1, isMine:false, isMarked: false, hidden:true, surroundingMines:0},
   {row:0, col:2, isMine:true, isMarked: false, hidden:true, surroundingMines:0},

   {row:1, col:0, isMine:true, isMarked: false, hidden:true, surroundingMines:0},
   {row:1, col:1, isMine:false, isMarked: false, hidden:true, surroundingMines:0},
   {row:1, col:2, isMine:false, isMarked: false, hidden:true, surroundingMines:0},

   {row:2, col:0, isMine:false, isMarked: false, hidden:true, surroundingMines:0},
   {row:2, col:1, isMine:true, isMarked: false, hidden:true, surroundingMines:0},
   {row:2, col:2, isMine:false, isMarked: false, hidden:true, surroundingMines:0},
 ]
}


// write for loop to loop through the array board.cells
// loop needs to call the function countSurroundingMines, once for each cell

function startGame () {
  for (var i = 0; i < board.cells.length; i++) {
//   return countCells[i]
//    console.log("startGame; " + board.cells[i] + "i; " + i)
//    countSurroundingMines(board.cells[i]) 
   board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]) 
  } 
  // Don't remove this function call: it makes the game work!

  document.addEventListener("click", checkForWin)
  document.addEventListener("contextmenu", checkForWin)

  lib.initBoard();
}

// Define this function to look for a win condition:
//
// isMine = BOOM regardless of other properties - already set
// isMarked + hidden || cells[i]  = keep going
// isMarked + cells[i] = you win
function checkForWin () {

   for (var i = 0; i < board.cells.length; i++) {
     
     if (board.cells[i].isMine == true)
     
     if (board.cells[i].isMarked !== true) {
       return
     } else if (board.cells[i].isMarked == true) {
       board.cells[i].hidden == true
       return
     } else {
       board.cells[i].hidden !== true
        displayMessage('You win!')
     }
   }
}

//     if (board.cells[i].isMarked < 3 + board.cells[i].hidden < 6) {
//       keepGoing[i] += board.cells[i].isMarked + board.cells[i].hidden
//    } 
//      if (board.cells[i].isMarked, board.cells[i].hidden) {
//      board.cells[i].isMarked = 3
//      board.cells[i].hidden = false
//      winning[i] += board.cells[i].isMarked + board.cells[i].hidden
// //      displayMessage('You win!')
//      return   
//    }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)   

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0

  for (var i = 0; i < surrounding.length; i++) {
  if (surrounding[i].isMine == true)
  count++ 
  } 
  return count
}

// go through getSurroundingCells
// for a hint check out lib.initBoard 
// I need to assign the result of that function to something
