/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1305] 两棵二叉搜索树中的所有元素
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  // 官方解法
  const nums1 = [];
  const nums2 = [];
  const inorder = (node, res) => {
    if (node) {
      inorder(node.left, res);
      res.push(node.val);
      inorder(node.right, res);
    }
  };
  inorder(root1, nums1);
  inorder(root2, nums2);
  const merged = [];
  let p1 = 0,
    p2 = 0;
  while (true) {
    if (p1 === nums1.length) {
      for (let i = p2; i < nums2.length; i++) {
        merged.push(nums2[i]);
      }
      break;
    }
    if (p2 === nums2.length) {
      for (let i = p1; i < nums1.length; i++) {
        merged.push(nums1[i]);
      }
      break;
    }
    if (nums1[p1] < nums2[p2]) {
      merged.push(nums1[p1++]);
    } else {
      merged.push(nums2[p2++]);
    }
  }
  return merged;
};
// @lc code=end
var getAllElements2 = function (root1, root2) {
  const res = [];
  let queue = [];
  queue.push(root1);
  queue.push(root2);
  while (queue.length) {
    const element = queue.shift();
    if (element && element.val != null) {
      res.push(element.val);
    }
    if (element && element.left) {
      queue.push(element.left);
    }
    if (element && element.right) {
      queue.push(element.right);
    }
  }
  return res.sort((a, b) => a - b);
};
