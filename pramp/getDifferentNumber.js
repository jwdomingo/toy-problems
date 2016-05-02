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

/*

If I am to be given an array of unique non-negative integers, the brute force approach would be to go through the array and look for 1. If it exists, iterate through array again to find 2. If 2 exists, keep incrementing the target and looping through the array until the target is not found. Of course, the time complexity here is exponential or rather O(n^target).

A slightly improved version is to loop through the array and create a dictionary of all the integers. A second loop then goes through and incrementally checks if each non-negative integeger exists in the dictionary. Simply return the first one that does not exist. The time (and space) complexity here is O(n) linear because we iterate through the entire array twice to find the missing number.

*/

// getDifferentNumber takes an arr

  // return null if arr is empty

  // check if arr contains all possible non-negative integers already

  // if so return null

  // create hash

  // loop through arr to map each value to hash

    // value of each key is arbitrary

  // loop through arr again, this time looping up to n + 1

    // based on pigeonhole principle, if we know one int will not belong in arr
    // simply return int if it is not hash
