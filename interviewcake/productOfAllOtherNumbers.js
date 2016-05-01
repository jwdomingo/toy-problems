/*
 * Product of All Other Numbers
 *
 * You have an array of integers, and for each index you want to find the
 * product of every integer except the integer at that index.
 * Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of
 * integers and returns an array of the products.
 *
 * For example, given:
 * [1, 7, 3, 4]
 *
 * your function would return:
 * [84, 12, 28, 21]
 *
 * by calculating:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * Do not use division in your solution.
 *
*/

/*---------------------------------*/
/*      SUB-OPTIMAL SOLUTION       */
/*     O(n^2) time, O(n) space     */
/*---------------------------------*/

var getProductsOfAllIntsExceptAtIndexSub = function (arr) {
  var result = [];
  var pastProducts = 1;
  var products;

  for (var i = 0, l = arr.length; i < l; i++) {
    products = 1;
    for (var j = i + 1; j < l; j++) {
      products *= arr[j];
    }
    result.push(products * pastProducts);
    pastProducts *= arr[i];
  }

  return result;
};

console.log(getProductsOfAllIntsExceptAtIndexSub([1, 7, 3, 4]));
console.log(getProductsOfAllIntsExceptAtIndexSub([100]));
console.log(getProductsOfAllIntsExceptAtIndexSub([3, 5, 6, 0]));


/*-------------------------------*/
/*       OPTIMAL SOLUTION        */
/*     O(n) time, O(n) space     */
/*-------------------------------*/

var getProductsOfAllIntsExceptAtIndex = function (arr) {
  var productsAfterIndex = [];
  var products = 1;
  for (var i = arr.length - 1; i >= 0; i--) {
    productsAfterIndex[i] = products;
    products *= arr[i];
  }

  var result = [];
  var productsBeforeIndex = 1;

  for (var i = 0, l = arr.length; i < l; i++) {
    result.push(productsBeforeIndex * productsAfterIndex[i]);
    productsBeforeIndex *= arr[i];
  }

  return result;
};

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
console.log(getProductsOfAllIntsExceptAtIndex([100]));
console.log(getProductsOfAllIntsExceptAtIndex([3, 5, 6, 0]));
