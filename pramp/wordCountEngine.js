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
var runWordCountEngine = document => {
  // declare wordCounts empty array
  var wordCounts = [];
  // return wordCounts if document has no length
  if (!document.length) {
    return wordCounts;
  }
  // remove all special characters using RegEx: /[^\w\s]/gi and /[_]/gi
  // split document by space and store into words array
  var words = document.replace(/[^\w\s]/gi, '').replace(/[_]/gi, '').split(' ');
  var len = words.length;
  // create empty object called hash
  var hash = {};
  var word = '';
  // loop through words
  for (var w = 0; w < len; w++) {
    // insert new words into hash and init to 1
    word = words[w];
    if (hash.hasOwnProperty(word)) {
      // increment existing words
      hash[word]++;
    } else {
      hash[word] = 1;
    }
  }
  // loop through hash and store each key-value pair in wordCounts
  var count;
  for (var word in hash) {
    count = hash[word];
    wordCounts.push([word, count]);
  }
  // sort wordCounts using native JavaScript sort method
  wordCounts.sort((a, b) => {
    var countA = a[1];
    var countB = b[1];
    var wordA = a[0];
    var wordB = b[0];
    // use index 1 of each tuple to compare whether or not a is less than b
    // if tuples at index 1 are the same, return whether a is less than b using index 0
    if (countA === countB) {
      return wordA < wordB ? -1 : (wordA > wordB ? 1 : 0);
    } else {
      return countA - countB;
    }
  });
  // return wordCounts
  return wordCounts;
};
