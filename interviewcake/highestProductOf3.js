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
  var highestProductOfThree = 1;
  var lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  var lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);;
  var highestProductOf2 = lowestProductOf2;

  for (var i = 2, l = arrayOfInts.length; i < l; i++) {
    lowest = Math.min(lowest, arrayOfInts[i]);
    lowestProductOf2 = Math.min(lowestProductOf2, lowest * arrayOfInts[i]);

    highest = Math.max(highest, arrayOfInts[i]);
    highestProductOf2 = Math.max(highestProductOf2, highest * arrayOfInts[i]);

    highestProductOfThree = Math.max(highestProductOfThree, arrayOfInts[i] * Math.max(lowestProductOf2, highestProductOf2));
  }

  return highestProductOfThree;
}

console.log('findHighestProductOf3( [6, 5, 4, 3, 2, 1] ) == 120 :', findHighestProductOf3([6, 5, 4, 3, 2, 1]));
console.log('findHighestProductOf3( [1, 6, 3, 2, 4, 5] ) == 120 :', findHighestProductOf3([1, 6, 3, 2, 4, 5]));
console.log('findHighestProductOf3( [-10, -10, 1, 3, 2] ) == 300 :', findHighestProductOf3([-10, -10, 1, 3, 2]));
