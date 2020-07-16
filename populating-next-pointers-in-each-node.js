//https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

// 116. Populating Next Right Pointers in Each Node
// Medium

// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

//  

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {    
    if (!root) return null   
    let currentLevel = [root];
    let nextLevel = [];
    
    while (currentLevel.length > 0 ){
        let i = 0

        while( i < currentLevel.length) {

        if (currentLevel[i+1]) { currentLevel[i].next = currentLevel[i+1] }
        const curNode = currentLevel[i];
        i++

        if (curNode.left) { nextLevel.push(curNode.left) }
        if (curNode.right) { nextLevel.push(curNode.right) }      

    }

        currentLevel = nextLevel;
        nextLevel = []
    }
    
    return root
};