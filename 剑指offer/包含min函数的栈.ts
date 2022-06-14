/*
 * @Description: 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 * @Date: 2022-06-14 22:00:58
 * @LastEditTime: 2022-06-15 01:01:15
 */
/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  this.stack = []
  this.minStack = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  const position = this.stack.length
  const mPosition = this.minStack.length
  if (position === 0) {
      this.minStack[position] = x
      this.stack[position] = x
  } else {
      if(x < this.minStack[mPosition - 1] || x === this.minStack[mPosition - 1]) {
          this.minStack[mPosition] = x
      }
       this.stack.push(x) 
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const position = this.stack.length - 1
  const mPosition = this.minStack.length - 1
  const popNum = this.stack[position]
  const minNum = this.minStack[mPosition]
  if (minNum > popNum ||  minNum === popNum) {
      this.minStack.pop()
  }
  this.stack.pop() 
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  const position = this.stack.length -  1
  return this.stack[position]
};

/**
* @return {number}
*/
MinStack.prototype.min = function() {
  const MinStack = this.minStack.length
  return this.minStack[MinStack - 1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/