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
