// 701. Insert into a Binary Search Tree
// Medium

// Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

// For example, 

// Given the tree:
//         4
//        / \
//       2   7
//      / \
//     1   3
// And the value to insert: 5
// You can return this binary search tree:

//          4
//        /   \
//       2     7
//      / \   /
//     1   3 5
// This tree is also valid:

//          5
//        /   \
//       2     7
//      / \   
//     1   3
//          \
//           4
 

// Constraints:

// The number of nodes in the given tree will be between 0 and 10^4.
// Each node will have a unique integer value from 0 to -10^8, inclusive.
// -10^8 <= val <= 10^8
// It's guaranteed that val does not exist in the original BST.



var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val)
    const head = root;

    while (root) {
        if (!root.left && !root.right) {
            if (root.val < val) { 
                root.right = new TreeNode(val)
            }else {
                root.left = new TreeNode(val)
            }
            return head;
        }

        
        if (root.val < val) { 
            if(!root.right){
                 root.right = new TreeNode(val);
                    return head
            }
            root = root.right
        } else if (root.val > val) { 
            if(!root.left){
                 root.left = new TreeNode(val);
                    return head
            }
            root = root.left
        }
    }
    
    return null;
};
