/*
 * Highest Product of 3
 *
 * Given an arrayOfInts, find the highestProduct you can get from three of the
 * integers.
 * The input arrayOfInts will always have at least three integers.
 *
 */

/* I am given an array containing integers and I am supposed to return the largest product of three elements (an integer). If there are only positive integers, I simply have to sort the array and return the product of the largest three. If there are negative integers, I need to take the max of a) the products of the largest three and b) the product of the largest integer and the two smallest integers (in case there are the very small negative numbers that result in a large positive). Another edge case is when all elements in the array are negative numbers but the algorithm I proposed handles this. */

// findHighestProductOf3 takes an array

  // sort array

  // return max of top three ints or bottom two ints and top int
