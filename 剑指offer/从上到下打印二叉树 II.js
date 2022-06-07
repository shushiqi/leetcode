// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [],
    queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let tmp = [];
    let length = queue.length;
    for (let index = 0; index < length; index++) {
      let node = queue.shift();
      tmp.push(node.val);
      if (node && node.left) {
        queue.push(node.left);
      }
      if (node && node.right) {
        queue.push(node.right);
      }
    }
    res.push(tmp);
  }
  return res;
};
console.log(levelOrder(root));
