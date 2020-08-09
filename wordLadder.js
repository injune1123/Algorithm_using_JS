// 127. Word Ladder
// Medium
// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// use distance hash

var ladderLength = function(beginWord, endWord, wordList) {
  const queue = [beginWord]
  const distance = {[beginWord]: 1}

  while(queue.length > 0) {
      const curWord = queue.shift()

      if (curWord === endWord){
          return distance[curWord]
      }
      for ( let nextWord of getNextWords(curWord)) {


          if( wordList.indexOf(nextWord) === -1 || distance.hasOwnProperty(nextWord)) {
             continue;
          }

          queue.push(nextWord)

          distance[nextWord] = distance[curWord] + 1
      }
  }

      return 0

};


function getNextWords (word) {
  const words = [];
  const engLetters = 'abcdefghijklmnopqrstuvwxyz'
  for(let i = 0; i < word.length; i++) {
      for(let j = 0; j < engLetters.length; j++) {
          if(engLetters[j] === word[i]){
              continue;
          }
          words.push( word.slice(0,i) + engLetters[j] + word.slice(i+1))
      }
  }
  return words
}
