const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let num = n.toString();
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    let str = '';
    for (let k = 0; k < num.length; k++) {
      if (k !== i)
      str = str + num[k];
    }
    arr[i] = +str;
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
