// 269. Alien Dictionary
// Hard

// There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

// Example 1:

// Input:
// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]

// Output: "wertf"
// Example 2:

// Input:
// [
//   "z",
//   "x"
// ]

// Output: "zx"
// Example 3:

// Input:
// [
//   "z",
//   "x",
//   "z"
// ] 

// Output: "" 

// Explanation: The order is invalid, so return "".
// Note:

// You may assume all letters are in lowercase.
// If the order is invalid, return an empty string.
// There may be multiple valid order of letters, return any one of them is fine.


/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let res = ""
    const graph = buildGraph(words)["graph"]
    const isValid = buildGraph(words).isValid
    if(!isValid) return ""
            
    const indegree = getInDgree(graph)
    const orderedArr = []    
    const isGraph = false;
    
    Object.keys(indegree).forEach((char)=>{

        if(indegree[char] === 0 ) {
            insertCharIntoOrderedArr(char, orderedArr)
        }
    })
    
    // orderedArr
    while (!isOrderedArrEmpty(orderedArr)) {
        const curChar = getFirstCharInOrderedArr(orderedArr);
        res += curChar;
        // neighbors in degree -1
        const neighbors = graph[curChar]
        neighbors.forEach((char) => {
            indegree[char]--
            if (indegree[char] == 0 ) {
                insertCharIntoOrderedArr(char, orderedArr)
            }
        })
    }
    
    if (res.length !== Object.keys(graph).length) return ""
    return res
};

function isOrderedArrEmpty (orderedArr) {
    for (let i = 0 ; i < orderedArr.length ; i++) {
         if(orderedArr[i]!== undefined) {
            return false
        }
    }
    return true;
}

function getFirstCharInOrderedArr (orderedArr) {
    for (let i = 0 ; i < orderedArr.length ; i++) {
        if(orderedArr[i] !== undefined){
            const res = orderedArr[i]
            orderedArr[i] = undefined
            return res
         }
    }
}

function insertCharIntoOrderedArr (char, orderedArr) {
    const ENGALPHABET = "abcdefghijklmnopqrstuvwxyz"
    const idx = ENGALPHABET.indexOf(char)
    orderedArr[idx] = char
    return orderedArr
}




function getInDgree (graph) {
 let inDegree = {}   
 Object.keys(graph).forEach( (char) => {
     inDegree[char] = inDegree[char] || 0;
     const neighbors = graph[char];
     neighbors.forEach((ch)=>{
         inDegree[ch] = inDegree[ch] || 0;
         inDegree[ch]++
     })
 })
    
    return inDegree
 
}

//build a graph with nodes
function buildGraph (words) {
    let isValid = true
    const graph = {}
    for (let word of words) {
        for (let char of word) {
            graph[char] = new Set()
        }
    }
    
    for (let i = 0; i < words.length - 1 ; i++) {

        const curWord = words[i]
        const nextWord = words[i+1]
        
        for (var j = 0; j < Math.min(curWord.length, nextWord.length); j++) {
            
            if(curWord[j] !== nextWord[j]) {         

                graph[curWord[j]].add(nextWord[j])
                break
            }else {
                  if(curWord[j+1] && !nextWord[j+1]){
                    isValid = false
                }
            }
        }

    }
    return {graph,isValid}
}


