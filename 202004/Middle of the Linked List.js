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

var middleNode = function (head) {
  var c = 0;
  var n = head;
  var values = [];
  while (n.next != null) {
    c++;
    values.push(n);
    n = n.next;
  }
  c++;
  values.push(n);

  return values[Math.floor(c / 2)];
};