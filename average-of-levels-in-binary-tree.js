// 637. Average of Levels in Binary Tree
// Easy

// 1298

// 167

// Add to List

// Share
// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var averageOfLevels = function(root) {
  const res = []
  const queue = [root]

  while(queue.length) {
      let sum = 0;
      const count = queue.length;

      for (let i = 0; i < count; i++) {
          const curNode = queue.shift()
          sum += curNode.val;
          if(curNode.left) {queue.push(curNode.left)}
          if(curNode.right) {queue.push(curNode.right)}
      }

      res.push(sum/count)
  }

  return res

};
