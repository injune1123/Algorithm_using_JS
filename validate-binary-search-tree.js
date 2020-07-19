// Validate Binary Search Tree
//https://leetcode.com/problems/validate-binary-search-tree/
// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

var isValidBST = function(root) {
    return helper(root, null, null)
};

function helper (node, lowerLimit, upperLimit) {

    if(node == null) return true
    
    const val = node.val
    if (lowerLimit !== null && val <= lowerLimit) return false;
    if (upperLimit !== null && val >= upperLimit) return false;

    if (! helper(node.right, val, upperLimit)) return false;
    if (! helper(node.left, lowerLimit, val)) return false;
    return true;

}

// 奇技淫巧
// dfs 遍历法如何退出

// var inorderSuccessor = function(root, p) {
//     let allNodes = [];
//     try {
//         dfs(root, allNodes, p)
//     }
//     catch{ 
//     }
//     return p === allNodes[allNodes.length-1] ? null : allNodes[allNodes.length-1]
// };


// function dfs (root,  allNodes, p) {

//     if (!root) {
//         return
//     }
        
//     dfs(root.left, allNodes, p)

//     allNodes.push(root)

//     if (allNodes[allNodes.length - 2] === p ) {
//         throw(err)
//         return 
//     }
    
//     dfs(root.right, allNodes, p)

// }