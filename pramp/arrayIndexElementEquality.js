/*
 * Array Index & Element Equality
 *
 * Given an array of sorted distinct integers named arr, write a function that
 * returns an index i in arr for which arr[i] = i or -1 if no such index exists.
 *
 * Implement the most efficient solution possible, prove the correctness of your * solution and analyze its runtime complexity (in terms of n - the length of
 * arr).
 *
 * Examples:
 *
 *   1. Given arr = [-8,0,2,5] the function returns 2, since arr[2] = 2
 *
 *   2. Given arr = [-1,0,3,6] the function returns -1, since no index in arr
 *      satisfies arr[i] = i
 */

var findEqualIndexElement = function (arr) {
  var begin = 0;
  var end = arr.length - 1;
  var mid;
  while (begin <= end) {
    mid = Math.floor(begin + end / 2);
    if (arr[mid] === mid) {
      return mid;
    } else if (arr[mid] < mid) {
      begin = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
