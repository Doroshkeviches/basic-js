const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
let arr = s2.split('');
let qwe = arr.length;
for (let i = 0; i < s1.length; i++) {
if (arr.includes(s1[i])) {
let zxc = arr.indexOf(s1[i]);
arr.splice(zxc, 1);
}
}
let qwe2 = arr.length;
return qwe - qwe2
}

module.exports = {
  getCommonCharacterCount
};
