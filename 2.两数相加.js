/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start

//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null,
    ret = null;
  let flag = 0;
  while (l1 || l2) {
    let sum1 = l1 ? l1.val : 0;
    let sum2 = l2 ? l2.val : 0;
    let sum = sum1 + sum2 + flag;
    if (!head) {
      head = ret = new ListNode(sum % 10);
    } else {
      ret.next = new ListNode(sum % 10);
      ret = ret.next;
    }
    l1 ? (l1 = l1.next) : "";
    l2 ? (l2 = l2.next) : "";
    flag = sum >= 10 ? 1 : 0;
  }
  if (flag) {
    ret.next = new ListNode(flag);
  }

  return head;
};
// @lc code=end
