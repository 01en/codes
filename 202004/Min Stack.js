/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.arr = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.arr.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.arr.splice(this.arr.length - 1, 1);

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1];

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  var arr2 = this.arr.slice();
  return arr2.sort((a, b) => { return a - b })[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */