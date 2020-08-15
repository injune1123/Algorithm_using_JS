// 23. Merge k Sorted Lists
// Hard

// Add to List

// Share
// Given an array of linked-lists lists, each linked list is sorted in ascending order.

// Merge all the linked-lists into one sort linked-list and return it.



// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

//brutal force method
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const headOfLists = [];
  let res = null;
  let pointer = null;

  lists.forEach((listHead, idx)=>{
      headOfLists[idx] = listHead
  })

  // get through all the nodes
  while (!checkAllNull(headOfLists)) {
      const minIdx = getMinIdx(headOfLists);


      // if not minIdx?
      if (minIdx !== undefined) {
          const curMinNode = new ListNode(headOfLists[minIdx].val)
          //build new list
          if (!res) {
              res = curMinNode
              pointer = res;
          } else {
              pointer.next = curMinNode;
              pointer = pointer.next;
          }
          // move the header pointer
          headOfLists[minIdx] =  headOfLists[minIdx].next
      }

  }

  return res;

};

function checkAllNull (arr) {
  let res = true;
  for (let i = 0; i < arr.length; i++) {
      // while element is not null or undefined
      if(arr[i]) {
         res = false;
         break;
      }
  }
  return res;
}

function getMinIdx  (arr) {
  let minIdx;
  for (let i = 0 ; i < arr.length; i++) {
      const curNode = arr[i]
      if(curNode) {
          if (!minIdx) {
              minIdx = [i]
          } else if (curNode.val < arr[minIdx].val) {
              minIdx = i
          }
      }
  }
  return minIdx;
}



// K 路归并算法 K-way merge
// Priority Queue

