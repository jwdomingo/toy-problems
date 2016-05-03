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

/*
   input: sorted array of distinct integers
   output: index of element where element is equal to its index or -1 if DNE
   constraints: most efficient
   edge cases: empty array => -1
*/

// findEqualIndexElement takes in a sorted array arr
var findEqualIndexElement = function (arr) {
  // begin set 0
  var begin = 0;
  // end set to len of arr - 1
  var end = arr.length - 1;
  // declare midpoint
  var mid;
  // while begin <= end
  while (begin <= end) {
    // mid = floor of begin + end / 2
    mid = Math.floor(begin + end / 2);
    // if arr[mid] == mid
    if (arr[mid] === mid) {
      // return mid
      return mid;
    // if arr[mid] < mid
    } else if (arr[mid] < mid) {
      // look at right half: set begin to mid + 1
      begin = mid + 1;
    // if arr[mid] > mid
    } else {
      // look at left half: set end to mid - 1
      end = mid - 1;
    }
  }
  // return -1 if all else fails
  return -1;
};
