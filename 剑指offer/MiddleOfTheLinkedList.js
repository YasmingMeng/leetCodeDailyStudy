/*
 * @Description: Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.
 * @Date: 2022-08-16 17:54:55
 * @LastEditTime: 2022-08-16 17:55:39
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
  let fastNode = head
  let slowNode = head
  while(fastNode && fastNode.next) {
      fastNode = fastNode.next.next
      slowNode = slowNode.next
  }
  return slowNode
};