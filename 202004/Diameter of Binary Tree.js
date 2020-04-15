/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  ans = 1;
  maxDepth(root);
  return ans - 1;
};

var maxDepth = (node) => {
  if (node === null) {
    return 0;
  }

  var lDepth = maxDepth(node.left);
  var rDepth = maxDepth(node.right);

  ans = Math.max(ans, lDepth + rDepth + 1);
  return Math.max(lDepth, rDepth) + 1;
};