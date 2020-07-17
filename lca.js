// 236. Lowest Common Ancestor of a Binary Tree
// Medium


// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]


 

//https://www.youtube.com/watch?v=13m9ZCB8gjw


var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    if (root === p ) return root;
    if (root === q) return root;
    
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    
    if(left && right) return root;
    if(!left && !right) return null;

    if(left) return left
    
    return right
};