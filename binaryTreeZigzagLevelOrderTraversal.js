// 103. Binary Tree Zigzag Level Order Traversal
// Medium

// Share
// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]


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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return []
  const res = []
  let leftToRight = true;
  const queue =[root]

  while(queue.length) {
      const curLevelNodes = [];
      const curLevelLen = queue.length

      for(let i = 0; i < curLevelLen; i++){

          if(leftToRight){

              curNode = queue.shift();
              curLevelNodes.push(curNode.val)

              curNode.left && queue.push(curNode.left)
              curNode.right && queue.push(curNode.right)
          } else {
              curNode = queue.pop();
              curLevelNodes.push(curNode.val)
              curNode.right && queue.unshift(curNode.right)
              curNode.left && queue.unshift(curNode.left)
          }

      }
      leftToRight = !leftToRight
      res.push(curLevelNodes)

  }
  return res

};
