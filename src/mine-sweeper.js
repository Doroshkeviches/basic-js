const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let arr = new Array(matrix.length)
  for(let i = 0; i < matrix.length; i++) {
    arr[i] = new Array(matrix[i].length)
  }
  for(let j = 0; j < matrix.length; j++) {
    for(let n = 0; n < matrix[j].length; n++){
      arr[j][n] = test(matrix, j-1, n-1) + test(matrix, j, n-1) + test(matrix, j+1, n-1)
                + test(matrix, j-1, n)                       + test(matrix, j+1, n)
                + test(matrix, j-1, n+1) + test(matrix, j, n+1) + test(matrix, j+1, n+1)
    }
  }
  return arr
}

function test(qwe, j, n) {
  if(j < 0 || n < 0 || j > qwe.length - 1 || n > qwe[j].length - 1) return 0
  return qwe[j][n] ? 1 : 0
}

module.exports = {
  minesweeper
};
