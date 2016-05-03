/*
 * Word Count Engine
 *
 * Implement a document scanning engine that receives a text document doc and
 * returns a list of all unique words in it and their number of occurrences,
 * sorted by the number of occurrences in descending order.
 *
 * Example:
 *   document = "practice makes perfect. get perfect by practice. just
 *   practice!";
 *
 *   // the engine returns the list: { practice: 3, perfect: 2,  makes: 1, get: *   1, by: 1, just: 1 }.
 *
 * The engine should ignore punctuation and white-spaces.
 * Find the minimal runtime complexity and analyze it.
 */

/*
Essentially, the input is a long string separated by spaces and punctuation. I need to remove all punctuation (including any special characters within a word such as apostrophes). I'll doing this using RegEx pattern matching.

I create a hash by looping through each word in the list and storing each unique word in the dictionary with a init val of 1. Existing words are incremented.

I loop through list again to pull out each key-value pair as a tuple and push them into an array.

I can then perform a stable quicksort on the array using the values and then the words to sort.

Time complexity would be O(n log n) and space would be O(n).
*/


// runWordCountEngine takes in a text document

  // declare wordCounts empty array

  // return wordCounts if document has no length

  // remove all special characters using RegEx: /[^\w\s]/gi and /[_]/gi

  // split document by space and store into words array

  // create empty object called hash

  // loop through words

    // insert new words into hash and init to 1

    // increment existing words

  // loop through hash and store each key-value pair in wordCounts

  // sort wordCounts using native JavaScript sort method

    // use index 1 of each tuple to compare whether or not a is less than b

    // if tuples at index 1 are the same, return whether a is less than b using index 0
