/*
 * Getting a Different Number
 *
 * Given an array arr of n unique non-negative integers, how can you most
 * efficiently find a non-negative integer that is not in the array?
 *
 * Your solution should return such an integer or null if arr contains all
 * possible integers.
 *
 * Analyze the runtime and space complexity of your solution.
 */

var getDifferentNumber = function (arr) {
  var len = arr.length;
  if (!len || len === Infinity + 1) {
    return null;
  }

  var hash = {};
  for (var i = 0; i < len; i++) {
    hash[i] = 1;
  }
  for (var diffNum = 0; diffNum <= len; diffNum++) {
    if (!hash[diffNum]) {
      return diffNum;
    }
  }
}
