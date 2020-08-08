//https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
// 297. Serialize and Deserialize Binary Tree

// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Example:

// You may serialize the following tree:

//     1
//    / \
//   2   3
//      / \
//     4   5

// as "[1,2,3,null,null,4,5]"
// Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let res = []
  if(!root) return ""

  let queue = [root]
  while(queue.length) {
      const curNode = queue.shift()
      curNode ? res.push(curNode.val) : res.push("#")
      if (curNode) {
      curNode.left ? queue.push(curNode.left) :  queue.push(null)
      curNode.right ? queue.push(curNode.right) : queue.push(null)
      }
  }
  return res.join()
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/

/*1,2,3,#,#,4,5,#,#,#,#
*/

var deserialize = function(data) {
  if(!data.length) return null
  const valArr = data.split(",");
  let parentNodeIdx = 0
  let childNodeIdx = 1
  const head = new TreeNode(valArr[0])
  const nodeQueue = [head]
  let leftChild = true

  while(nodeQueue.length){

      if (valArr[childNodeIdx] == "#") {
          childNodeIdx++
          if(!leftChild) {
              nodeQueue.shift()
          }
          leftChild = !leftChild

          continue;
      }
      const curChildNode = new TreeNode(valArr[childNodeIdx])

      if(leftChild) {
          nodeQueue[0].left = curChildNode
          nodeQueue.push(curChildNode)
          childNodeIdx++
      } else {
          nodeQueue[0].right = curChildNode
          nodeQueue.push(curChildNode)
          childNodeIdx++
      }
      //check whether
      if(!leftChild) {
          nodeQueue.shift()
      }
      leftChild = !leftChild
  }
  return head
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
