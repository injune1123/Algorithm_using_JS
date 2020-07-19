// https://leetcode.com/problems/inorder-successor-in-bst/

// 285. Inorder Successor in BST
// Medium

// Add to List

// Share
// Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

// The successor of a node p is the node with the smallest key greater than p.val.

 

// Example 1:


// Input: root = [2,1,3], p = 1
// Output: 2
// Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.
// Example 2:


// Input: root = [5,3,6,2,4,null,null,1], p = 6
// Output: null
// Explanation: There is no in-order successor of the current node, so the answer is null.
 

// Note:

// If the given node has no in-order successor in the tree, return null.
// It's guaranteed that the values of the tree are unique.


var inorderSuccessor = function(root, p) {
    let allNodes = [];
    dfs(root, allNodes)
    console.log(allNodes)
    for (let i = 0; i < allNodes.length; i++ ) {
        if(allNodes[i] === p) {
            return i === allNodes.length ? null : allNodes[i+1]
        }
        
    }
};

function dfs (root, allNodes ) {
    if (!root) {
        return 
    }
    dfs(root.left, allNodes)
    allNodes.push(root)
    dfs(root.right, allNodes)
}

// 奇技淫巧
// 强行退出dfs 遍历法

var inorderSuccessor = function(root, p) {
    let allNodes = [];
    try {
        dfs(root, allNodes, p)
    }
    catch{ 
    }
    return p === allNodes[allNodes.length-1] ? null : allNodes[allNodes.length-1]
};


function dfs (root,  allNodes, p) {

    if (!root) {
        return
    }
        
    dfs(root.left, allNodes, p)

    allNodes.push(root)

    if (allNodes[allNodes.length - 2] === p ) {
        throw(err)
        return 
    }
    
    dfs(root.right, allNodes, p)

}