/*
 * @Description: 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * @Date: 2022-06-15 22:25:17
 * @LastEditTime: 2022-06-15 22:25:27
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
  let nums = [];
  let node = head;
  while (node !== null) {
      nums.unshift(node.val);
      node = node.next;
  }
  return nums;
};