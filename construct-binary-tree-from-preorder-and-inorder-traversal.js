//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// Leetcode 105. Construct Binary Tree from Preorder and Inorder Traversal
// Medimum
// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7


var buildTree = function(preorder, inorder) {
    //edge case
    if(!preorder || preorder.length < 1) {
        return null
    }    
    const rootVal = preorder[0]
    const root = new TreeNode(rootVal)
    
    //exit condition
    if(preorder.length === 1 ) {
        return root
    }
    
    const rootIndexInorder = inorder.indexOf(rootVal)
    
    const preorderLeft = preorder.slice(1,rootIndexInorder+1)
    const preorderRight = preorder.slice(rootIndexInorder+1)
    
    const inorderLeft = inorder.slice(0,rootIndexInorder)
    const inorderRight = inorder.slice(rootIndexInorder+1)
        
    root.left = buildTree(preorderLeft, inorderLeft)
    root.right = buildTree(preorderRight, inorderRight)
    
    return root

};