/*
 * Highest Product of 3
 *
 * Given an arrayOfInts, find the highestProduct you can get from three of the
 * integers.
 * The input arrayOfInts will always have at least three integers.
 *
 */

/*-------------------------------------*/
/*         SUB-OPTIMAL SOLUTION        */
/*     O(n log n) time, O(n) space     */
/*-------------------------------------*/

var findHighestProductOf3Sub = function (arrayOfInts) {
  arrayOfInts.sort();
  var n = arrayOfInts.length - 1
  var product1 = arrayOfInts[n] * arrayOfInts[n - 1] * arrayOfInts[n - 2];
  var product2 = arrayOfInts[n] * arrayOfInts[0] * arrayOfInts[1];

  return Math.max(product1, product2);
}

console.log('findHighestProductOf3Sub( [6, 5, 4, 3, 2, 1] ) == 120 :', findHighestProductOf3Sub([6, 5, 4, 3, 2, 1]) == 120);
console.log('findHighestProductOf3Sub( [-10, -10, 1, 3, 2] ) == 120 :', findHighestProductOf3Sub([-10, -10, 1, 3, 2]) == 300);


/*-------------------------------*/
/*       OPTIMAL SOLUTION        */
/*     O(n) time, O(n) space     */
/*-------------------------------*/

var findHighestProductOf3 = function (arrayOfInts) {  
}

console.log('findHighestProductOf3( [6, 5, 4, 3, 2, 1] ) == 120 :', findHighestProductOf3([6, 5, 4, 3, 2, 1]) == 120);
console.log('findHighestProductOf3( [-10, -10, 1, 3, 2] ) == 120 :', findHighestProductOf3([-10, -10, 1, 3, 2]) == 300);
