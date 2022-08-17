/*
 * @Description: Given the head of a linked list, remove the nth node from the end of the list and return its head.
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @Date: 2022-08-17 14:12:26
 * @LastEditTime: 2022-08-17 14:13:16
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
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  if(!head.next) return head.next;
  let fastNode = head;
  let slowNode = head;
  for(let i = 0; i < n; i++) {
      fastNode = fastNode.next;
  }
  if(!fastNode) return head.next
  while(fastNode.next) {
      fastNode = fastNode.next;
      slowNode = slowNode.next;
  }
  slowNode.next = slowNode.next.next;
  return head
};