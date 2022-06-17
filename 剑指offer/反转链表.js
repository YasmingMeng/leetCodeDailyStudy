/*
 * @Description: 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * @Date: 2022-06-16 21:39:01
 * @LastEditTime: 2022-06-16 21:39:11
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
 * @return {ListNode}
 */
 var reverseList = function(head) {
  if(head == null || head.next == null) {
         return head;
     }
     let node = reverseList(head.next);
     head.next.next = head;
     head.next = null;
     return node;
};